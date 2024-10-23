import { Package } from "@/domain/model/package";
import {
    ApiBaseRouteCollection,
    ApiRoute,
    implementBaseApi,
} from "../../api-route";

(typeof Package).toString();
export const packageRoutes = {
    ...implementBaseApi("packages"),
} as const;

export type PackageRoute = keyof typeof packageRoutes;
