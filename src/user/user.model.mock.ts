import { User } from "./user.model";

export function mockUser(partial?: Partial<User>): User {
  return {
    id: "1",
    name: "Aethel",
    creationDate: new Date("680-11-11T02:03:04Z"),
    ...partial
  };
}
