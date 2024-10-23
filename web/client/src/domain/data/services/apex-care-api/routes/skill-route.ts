import { ApiRoute } from "../../api-route";

export const skillRoutes: { [key: string]: ApiRoute } = {};

export type SkillRoute = keyof typeof skillRoutes;
