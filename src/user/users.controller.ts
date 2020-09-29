import { Request, Response } from "express";
import { listAllUsers } from "./users.service";
import { craeteUserInDb } from "./users.repository";

export async function listUsersController(_req: Request, res: Response): Promise<void> {
  const users = await listAllUsers();

  res.status(200).json(users);
}

export function createUserCtrl(req, res) {
  craeteUserInDb(req.body.id, req.body.name);
  res.status(200).json({ status: "success" });
}
