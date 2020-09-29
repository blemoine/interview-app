import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";

export const handleControllerError = <A>(controller: (req: Request, res: Response) => Promise<A>) => (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<A | void> => {
  return controller(req, res).catch((e) => {
    console.error(e);
    next(e);
  });
};
