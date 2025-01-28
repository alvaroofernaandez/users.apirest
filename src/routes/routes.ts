import { RolesRepository } from "@repositories/roleRepository";
import { UserRepository } from "@repositories/userRepository";
import { RolesService } from "@services/roleService";
import { UserService } from "@services/userService";
import { Router } from "express";
import { IRolesRepository, IRolesService } from "types/RolesTypes";
import { IUserRepository, IUserService } from "types/UserTypes";

const router = Router();

const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

const rolesRepository: IRolesRepository = new RolesRepository();
const rolesService: IRolesService = new RolesService(rolesRepository);


export default () => {
  router.get("/health", (req, res) => {
    res.send("La api está funcionando con éxito");
  });

  // USERS ROUTES
  router.get("/users", async (req, res) => {
    const users = await userService.findUsers();
    res.json(users);
  });

  router.get("/users/:id", async (req, res) => {
    const users = await userService.findUsersById(req.params.id);
    res.json(users);
  });

  router.post("/users", async (req, res) => {
    const newUser = req.body;
    const result = await userService.createUser(newUser);

    res.json(result);
  });

  router.put("/users/:id", async (req, res) => {
    const users = await userService.updateUser(req.params.id, req.body);
    res.json(users);
  });

  router.delete("/users/:id", async (req, res) => {
    const users = await userService.deleteUser(req.params.id);
    res.json(users);
  });


  // ROLES ROUTES
  router.get("/roles", async (req, res) => {
    const roles = await rolesService.findRoles();
    res.json(roles);
  });

  router.get("/roles/:id", async (req, res) => {
    const roles = await rolesService.findRolesById(req.params.id);
    res.json(roles);
  });

  router.post("/roles", async (req, res) => {
    const newRole = req.body;
    const result = await rolesService.createRoles(newRole);

    res.json(result);
  });

  router.put("/roles/:id", async (req, res) => {
    const roles = await rolesService.updateRoles(req.params.id, req.body);
    res.json(roles);
  });

  router.delete("/roles/:id", async (req, res) => {
    const roles = await rolesService.deleteRoles(req.params.id);
    res.json(roles);
  });

  return router;
};