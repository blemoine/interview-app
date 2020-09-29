import { Router } from "express";
import cors from "cors";
import parser from "body-parser";
import { expressMiddleware } from "cls-rtracer";
import compression from "compression";
import { createUserCtrl, listUsersController } from "./user/users.controller";
import { handleControllerError } from "./utils/handle-controller-error";
import {getStatsCtrl} from "./user/stats.controller";

export const router = Router();

router.use(expressMiddleware({ headerName: "x-request-id", useHeader: true }));
router.use(cors());
router.use(compression());
router.use(parser.json({ limit: "12mb" }));

router.get("/users", handleControllerError(listUsersController));
router.post("/user/create", createUserCtrl);

router.get("/stats", getStatsCtrl)