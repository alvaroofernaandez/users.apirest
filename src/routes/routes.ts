import { UserRepository } from "@repositories/userRepository";
import { UserService } from "@services/userService";
import { Router } from "express";
import { IUserRepository, IUserService } from "types/UserTypes";

const router = Router();

const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);


export default () => {
  router.get("/health", (req, res) => {
    res.send("La api está funcionando con éxito");
  });

  router.get("/users", async (req, res) => {
    const users = await userService.findUsers();
    res.json(users);
  });

  router.post("/users", async (req, res) => {
    const newUser = req.body;
    const result = await userService.createUser(newUser);

    res.json(result);
  });

  return router;
};