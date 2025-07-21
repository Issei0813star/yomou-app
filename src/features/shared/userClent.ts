import * as service from "../users/server/service/userService";

export const userClient = {
  getByEmail: service.getByEmail,
  createUser: service.createUser,
};
