import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";

export class Server {
    private server: Express;

    constructor() {
        this.server = express();
        this.settings();
    }

    public settings() {
        this.server.use(bodyParser.json());
        this.server.use(cors());
    }

    public routes() {}

    public listen(port: number) {
        this.server.listen(port, () =>
            console.log(`Funcionando na porta ${port}`)
        );
    }
}
