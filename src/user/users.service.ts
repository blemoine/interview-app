import { User } from "./user.model";
import { listAllUsersInDb } from "./users.repository";

export function listAllUsers(): Promise<User[]> {
  return listAllUsersInDb();
}
