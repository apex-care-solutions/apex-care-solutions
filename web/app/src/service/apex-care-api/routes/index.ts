import { jobRoutes } from "./job-routes";
import { packageRoutes } from "./package-routes";
import { reviewRoutes } from "./review-routes";
import { serviceRoutes } from "./service-routes";
import { subscriptionRoutes } from "./subscription-routes";
import { technicianRoutes } from "./technician-routes";
import { userRoutes } from "./user-routes";
import { authRoutes } from "./auth-route";
import { chatRoutes } from "./chat-route";

export const apexCareRoutes = {
    ...jobRoutes,
    ...packageRoutes,
    ...reviewRoutes,
    ...serviceRoutes,
    ...subscriptionRoutes,
    ...technicianRoutes,
    ...userRoutes,
    ...authRoutes,
    ...chatRoutes
} as const;

export type ApexCareRoute = keyof typeof apexCareRoutes;
