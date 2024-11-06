import { NextRequest, NextResponse } from "next/server";
import { decodeToken, strictlyAuthorized, strictlyHeaderAuthentication, strictlyUnauthorized } from "./utils/middleware/auth";


export default function middleware(request: NextRequest) {
  let response: Promise<NextResponse<unknown> | null | undefined> = strictlyHeaderAuthentication(/api\/v.*/,decodeToken(
    /.*/,
    strictlyUnauthorized("/")(
      /^(\/auth\/.*)?$/,
      strictlyAuthorized("/auth/login")(
        /^(?!\/auth\/)(?!\/assets\/)(?!\/$)(?!\/_next\/static\/)(?!\/api\/v.*).*/
      )
    )
  ))({ request });

  if (!!response) return response;
}
