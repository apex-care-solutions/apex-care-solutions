import { Job } from "@/domain/model/job";
import {
    ApiBaseRouteCollection,
    ApiRoute,
    ApiRouteCollection,
    implementBaseApi,
} from "../../api-route";

export const jobRoutes: ApiRouteCollection & ApiBaseRouteCollection<"jobs"> = {
    ...implementBaseApi<Job>("jobs"),
} as const;

export type JobRoute = keyof typeof jobRoutes;
