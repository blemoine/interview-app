import * as userRepository from "./users.repository";
import { mockUser } from "./user.model.mock";
import { listUsersController } from "./users.controller";
import { mockResponse } from "../utils/test.utils";

describe("listUsersController", () => {
  it("should return the list of users from the repository", async () => {
    const users = [mockUser()];
    jest.spyOn(userRepository, "listAllUsersInDb").mockResolvedValueOnce(users);

    const response = mockResponse();
    await listUsersController({} as any, response);

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalledWith(users);
  });
});
