import { Router } from "express";
import {
    getTransacoes,
    postTransacoes
} from "../controllers/transacoes.controllers";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

const router = Router();

router.get("/", getTransacoes);

router.post("/", upload.single("file"), postTransacoes);

export default router;
