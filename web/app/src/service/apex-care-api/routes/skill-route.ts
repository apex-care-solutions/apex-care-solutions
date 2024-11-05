import { Skill } from "@/domain/models/skill";
import { API } from "../../api";
import { ApiBaseRouteCollection } from "../../api-route";

export const skillsRoutes = {
    "GET /skills": (url: string, query: { take: number; page: number }) =>
        API.route({
            url,
            method: "GET",
            route: `/skills`,
            query,
        }),
    "GET /skills/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "GET",
            route: `/skills/${id}`,
        }),
    "POST /skills": (url: string) =>
        API.route<SkillsRoute[]>({
            url,
            method: "POST",
            route: `/skills`,
        }),
    "PUT /skills/:id": (url: string, { id }: { id: string }, body: Skill) =>
        API.route<Skill>({
            url,
            method: "PUT",
            route: `/skills/${id}`,
            body: body,
        }),
    "DELETE /skills/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "DELETE",
            route: `/skills/${id}`,
        }),
} as const satisfies ApiBaseRouteCollection<"skills">;

export type SkillsRoute = keyof typeof skillsRoutes;
