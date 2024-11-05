import { chatRoutes } from "./chat-routes";
import { serviceRoutes } from "./service-routes";

export const apexCareRoutes = {
...chatRoutes,
...serviceRoutes
} as const;

export type ApexCareRoute = keyof typeof apexCareRoutes;