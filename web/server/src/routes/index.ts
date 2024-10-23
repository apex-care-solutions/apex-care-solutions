import { Request, Response, Router } from "express";
import { authRouter } from "./auth-routes";
import { jobsRouter } from "./jobs-routes";
import { packageRouter } from "./package-routes";
import { requestRouter } from "./request-routes";
import { reviewsRouter } from "./reviews-routes";
import { servicesRouter } from "./services-routes";
import { subscriptionsRouter } from "./subscription-routes";
import { techniciansRouter } from "./technician-routes";
import { userRouter } from "./user-routes";

export const indexRouter = Router();

indexRouter.use("/auth", authRouter);
indexRouter.use("/jobs", jobsRouter);
indexRouter.use("/package", packageRouter);
indexRouter.use("/requests", requestRouter);
indexRouter.use("/reviews", reviewsRouter);
indexRouter.use("/services", servicesRouter);
indexRouter.use("/subscriptions", subscriptionsRouter);
indexRouter.use("/technicians", techniciansRouter);
indexRouter.use("/users", userRouter);
indexRouter.use("/auth", authRouter);

