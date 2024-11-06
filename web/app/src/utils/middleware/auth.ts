import { NextResponse } from "next/server";
import { Middleware, MiddlewareNext, MiddlewarePayload } from ".";
import { jwtVerify } from "jose";
import { JWT_SECRET } from "@/utils/env";
import { authenticateRequest } from "@/presenter/actions/auth-actions";
import { createResponse } from "../api";

export const strictlyAuthorized =
  (redirectUrl: string) =>
  (route?: RegExp, next?: MiddlewareNext | undefined) =>
  async (payload: MiddlewarePayload) => {
    payload.data = payload.data || {};
    if (
      !route ||
      (payload.request.nextUrl.pathname.match(route) && !payload.data?.user)
    )
        return NextResponse.redirect(new URL(redirectUrl, payload.request.url));

    if (!!next) return next(payload);
  };

export const strictlyUnauthorized =
  (redirectUrl: string) =>
  (route?: RegExp, next?: MiddlewareNext | undefined) =>
  async (payload: MiddlewarePayload) => {
    /**
     * Only run if...
     * - pathname matches the route
     * - route does not exists
     * - user already authenticated
     */
    payload.data = payload.data || {};

    if (
      !route ||
      (payload.request.nextUrl.pathname.match(route) && !!payload.data?.user)
    )
      return NextResponse.redirect(new URL(redirectUrl, payload.request.url));

    if (!!next) return next(payload);
  };

  export const strictlyHeaderAuthentication =
  (route?: RegExp, next?: MiddlewareNext | undefined) =>
  async (payload: MiddlewarePayload) => {
    /**
     * Only run if...
     * - pathname matches the route
     * - route does not exists
     * - user already authenticated
     */
    payload.data = payload.data || {};

    const authUser = await authenticateRequest(payload.request);

    if (
      !route ||
      (payload.request.nextUrl.pathname.match(route) && !authUser)
    ) {
      console.log("strictly bearer authorized", payload.request.url)
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })};

    if (!!next) return next(payload);
  };


/**
 * We only want to read and decode our token once.
 * We want to pass that on to the other middleware to access data.
 * This will be used for access control, authentication and general identification.
 */
export const decodeToken: Middleware =
  (route?: RegExp, next?: MiddlewareNext | undefined) =>
  async (payload: MiddlewarePayload) => {
    const { request } = payload;
    const token = request.cookies.get("token")?.value;
    payload.data = payload.data || {};

    if (token) {
      try {
        const { payload: decoded } = await jwtVerify(
          token,
          new TextEncoder().encode(JWT_SECRET)
        );

        // Ensure data.user is initialized to an object
        payload.data.user = { ...decoded };
      } catch (error) {
        console.error("JWT verification failed:", error);
      }
    }

    if (next) return next(payload);
    return null;
  };
