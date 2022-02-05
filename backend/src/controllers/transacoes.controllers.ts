import { Request, Response } from "express";
import Transacoes from "../models/transacoes.model";
import { IRequest } from "../interfaces/request.interface";
import { IResponse } from "../interfaces/response.interface";

let response: IResponse = {
    success: true,
    message: "",
    params: {}
};

let status = 0;

export const getTransacoes = (req: Request, res: Response) => {
    Transacoes.findAll()
        .then(data => {
            response = { ...response, params: { data } };

            status = 200;
        })
        .catch(data => {
            response = { ...response, success: false, message: data };

            status = 500;
        })
        .finally(() => {
            res.status(status).json(response);
        });
};
