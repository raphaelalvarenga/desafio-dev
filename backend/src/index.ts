import dotEnv from "dotenv";
dotEnv.config();

import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sync from "./models/sync";
import transacoesRoutes from "./routes/transacoes.routes";

const app: Express = express();

app.use(bodyParser.json());
app.use(cors());
app.use(transacoesRoutes);

sync()
    .then(() => {
        app.listen(3001, () => console.log("Funcionando na porta 3001"));
    })
    .catch(error => console.log(error));
