import { ApiRoute } from "../../api-route";

export const termRoutes: { [key: string]: ApiRoute } = {};

export type TermRoute = keyof typeof termRoutes;
