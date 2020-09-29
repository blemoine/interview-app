import { executeQuery } from "../db/db";
import { User } from "./user.model";

export async function listAllUsersInDb(): Promise<User[]> {
  const rows = await executeQuery<{ id: string; name: string; birthday: string }>(
    `SELECT id,name, birthday FROM users`
  );
  return rows.map(({ id, name, birthday }) => ({ id, name, birthday: new Date(birthday) }));
}
