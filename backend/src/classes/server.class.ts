import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
import sync from "../models/sync";

export class Server {
    private server: Express;

    constructor() {
        this.server = express();
        this.settings();
    }

    public settings() {
        this.server.use(bodyParser.json());
        this.server.use(cors());

        sync()
            .then(() => {
                this.listen(3001);
            })
            .catch(error => console.log(error));
    }

    public routes() {}

    private listen(port: number) {
        this.server.listen(port, () =>
            console.log(`Funcionando na porta ${port}`)
        );
    }
}
