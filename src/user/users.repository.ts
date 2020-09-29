import { executeQuery } from "../db/db";
import { User } from "./user.model";

export async function listAllUsersInDb(): Promise<User[]> {
  const rows = await executeQuery<{ id: string; name: string; creationDate: string }>(
    `SELECT id, name, creationDate FROM users`
  );
  return rows.map(({ id, name, creationDate }) => ({ id, name, creationDate: new Date(creationDate) }));
}

export function craeteUserInDb(id, name) {
  executeQuery(`INSERT INTO users VALUES (${name}, ${id}, ${new Date()})`);
}
