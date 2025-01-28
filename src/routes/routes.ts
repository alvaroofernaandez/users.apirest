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

  //METODOS GET
  router.get("/users", async (req, res) => {
    const users = await userService.findUsers();
    res.json(users);
  });

  router.get("/users/:id", async (req, res) => {
    const users = await userService.findUsersById(req.params.id);
    res.json(users);
  });

  //METODOS POST
  router.post("/users", async (req, res) => {
    const newUser = req.body;
    const result = await userService.createUser(newUser);

    res.json(result);
  });

  //METODOS PUT
  router.put("/users/:id", async (req, res) => {
    const users = await userService.updateUser(req.params.id, req.body);
    res.json(users);
  });

  //METODOS DELETE
  router.delete("/users/:id", async (req, res) => {
    const users = await userService.deleteUser(req.params.id);
    res.json(users);
  });

  return router;
};