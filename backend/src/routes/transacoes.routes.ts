import { Router } from "express";
import { getTransacoes } from "../controllers/transacoes.controllers";

const router = Router();

router.get("/", getTransacoes);

export default router;
