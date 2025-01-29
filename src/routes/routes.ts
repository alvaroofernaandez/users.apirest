import { loginUser, registerUser } from "@controllers/auth/authControllers";
import { createRoles, deleteRoles, findRoles, findRolesById, updateRoles } from "@controllers/rolesController";
import { findUsers, findUsersById, createUser, updateUser, deleteUser } from "@controllers/usersController";
import { Router } from "express";
import { Request, RequestHandler, Response } from "express";
const router = Router();

export default () => {
  router.get("/health", (req, res) => {
    res.send("La api está funcionando con éxito");
  });

  // AUTH ROUTES
  router.post("/auth/register", registerUser)
  router.post("/auth/login", loginUser)

  // USERS ROUTES
  router.get("/users", findUsers);
  router.get("/users/:id", findUsersById);
  router.post("/users", createUser);
  router.put("/users/:id", updateUser);
  router.delete("/users/:id", deleteUser);


  // ROLES ROUTES
  router.get("/roles", findRoles);
  router.get("/roles/:id", findRolesById);
  router.post("/roles", createRoles);
  router.put("/roles/:id", updateRoles);
  router.delete("/roles/:id", deleteRoles);

  return router;
};