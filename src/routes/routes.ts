import { Router } from "express";

const router = Router();

export default () => {
  router.get("/health", (req, res) => {
    res.send("La api está funcionando con éxito");
  })

  return router;
};