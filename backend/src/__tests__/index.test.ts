import dotEnv from "dotenv";
dotEnv.config();
import server from "..";
import supertest from "supertest";
// import { getTransacoes } from "../controllers/transacoes.controllers";
import Transacoes from "../models/transacoes.model";

it("makes a request to route GET /", async () => {
    const dbResult = await supertest(server).get("/");
    console.log(dbResult);

    Transacoes.findAll().then((res: any) => {
        console.log(res);
    });
    expect(true).toBeTruthy();
});
