import { Package } from "@/domain/model/package";
import { API } from "../../api";
import { ApiBaseRouteCollection } from "../../api-route";

export const packageRoutes = {
    "GET /packages": (url: string, query: { take: number; page: number }) =>
        API.route({
            url,
            method: "GET",
            route: `/packages`,
            query,
        }),
    "GET /packages/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "GET",
            route: `/packages/${id}`,
        }),
    "POST /packages": (url: string) =>
        API.route<Package[]>({
            url,
            method: "POST",
            route: `/packages`,
        }),
    "PUT /packages/:id": (url: string, { id }: { id: string }, body: Package) =>
        API.route<Package>({
            url,
            method: "PUT",
            route: `/packages/${id}`,
            body: body,
        }),
    "DELETE /packages/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "DELETE",
            route: `/packages/${id}`,
        }),
} as const satisfies ApiBaseRouteCollection<"packages">;

export type PackageRoute = keyof typeof packageRoutes;
