import { Request, Response } from "express";
import { listAllUsers } from "./users.service";

export async function listUsersController(_req: Request, res: Response): Promise<void> {
  const users = await listAllUsers();

  res.status(200).json(users);
}

export function createUserCtrl(req, res) {

}
