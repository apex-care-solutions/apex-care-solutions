import { jobRoutes } from "./job-routes";
import { packageRoutes } from "./package-routes";
import { jobRequestRoutes } from "./job-request-routes";
import { reviewRoutes } from "./review-routes";
import { serviceRoutes } from "./service-routes";
import { subscriptionRoutes } from "./subscription-routes";
import { technicianRoutes } from "./technician-routes";
import { userRoutes } from "./user-routes";
import { authRoutes } from "./auth-route";

export const apexCareRoutes = {
    ...jobRoutes,
    ...packageRoutes,
    ...jobRequestRoutes,
    ...reviewRoutes,
    ...serviceRoutes,
    ...subscriptionRoutes,
    ...technicianRoutes,
    ...userRoutes,
    ...authRoutes
} as const;

export type ApexCareRoute = keyof typeof apexCareRoutes;
