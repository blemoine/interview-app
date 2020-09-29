import { executeQuery, startDatabase } from "../db/db";
import { listAllUsersInDb } from "./users.repository";

describe("listAllUsersInDb", () => {
  beforeAll(() => {
    startDatabase();
  });
  beforeEach(async () => {
    await executeQuery("DELETE FROM users");
  });
  it("should return the list of all users in DB", async () => {
    await executeQuery("INSERT INTO users(id, name,birthday) VALUES (?, ?, ?)", [
      "1",
      "Aetheldred",
      "1978-03-04T06:07:08Z"
    ]);
    await executeQuery("INSERT INTO users(id, name,birthday) VALUES (?, ?, ?)", [
      "2",
      "Jean-Georges",
      "2020-02-03T06:07:08Z"
    ]);

    const users = await listAllUsersInDb();

    expect(users).toEqual([
      { id: "1", name: "Aetheldred", birthday: new Date("1978-03-04T06:07:08Z") },
      { id: "2", name: "Jean-Georges", birthday: new Date("2020-02-03T06:07:08Z") }
    ]);
  });
});
