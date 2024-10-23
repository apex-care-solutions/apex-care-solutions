import { jobsRoutes } from "./jobs-routes";
import { packagesRoutes } from "./package-routes";
import { requestsRoutes } from "./requests-routes";
import { reviewsRoutes } from "./reviews-routes";
import { servicesRoutes } from "./services-routes";
import { subscriptionsRoutes } from "./subscriptions-routes";
import { techniciansRoutes } from "./technicians-routes";
import { usersRoutes } from "./users-routes";

export const apexCareRoutes = {
    ...jobsRoutes,
    ...packagesRoutes,
    ...requestsRoutes,
    ...reviewsRoutes,
    ...servicesRoutes,
    ...subscriptionsRoutes,
    ...techniciansRoutes,
    ...usersRoutes,
} as const;
