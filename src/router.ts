import { Router } from "express";
import cors from "cors";
import parser from "body-parser";
import { expressMiddleware } from "cls-rtracer";
import compression from "compression";
import { listUsersController } from "./user/users.controller";
import { handleControllerError } from "./utils/handle-controller-error";

export const router = Router();

router.use(expressMiddleware({ headerName: "x-request-id", useHeader: true }));
router.use(cors());
router.use(compression());
router.use(parser.json({ limit: "12mb" }));

router.get("/users", handleControllerError(listUsersController));
//router.post('/users', handleControllerError(createUserController));
//router.get('/users/:id', handleControllerError(getUserByIdController));
//router.delete('/users/:id', handleControllerError(deleteUserById));
