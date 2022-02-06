import { Request, Response } from "express";
import Transacoes from "../models/transacoes.model";
import { IResponse } from "../interfaces/response.interface";
import { ITransacao } from "../interfaces/transacao.interface";
import fs from "fs";
import path from "path";
import { getTimestamp } from "../helpers";

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

export const postTransacoes = (req: Request, res: Response) => {
    const file = req.file?.filename as string;

    const fileAddress = path.join(__dirname, "..", "..", "uploads", file);

    fs.readFile(fileAddress, "utf-8", (error, data) => {
        const transacoesString = data.toString().split("\n");

        if (transacoesString[transacoesString.length - 1] === "") {
            transacoesString.pop();
        }
        const transacoes: ITransacao[] = transacoesString.map(transacao => {
            const timestamp = getTimestamp(
                transacao.slice(1, 9),
                transacao.slice(42, 48)
            );

            const valor = (parseInt(transacao.slice(9, 19)) / 100).toString();

            return {
                data: timestamp,
                valor,
                cpf: transacao.slice(19, 30),
                cartao: transacao.slice(30, 42),
                donoLoja: transacao.slice(48, 62),
                nomeLoja: transacao.slice(62, 81),
                tiposTransacaoId: transacao.slice(0, 1)
            };
        });

        Transacoes.bulkCreate(
            transacoes.map(transacao => {
                return {
                    data: transacao.data,
                    valor: transacao.valor,
                    cpf: transacao.cpf,
                    cartao: transacao.cartao,
                    donoLoja: transacao.donoLoja,
                    nomeLoja: transacao.nomeLoja,
                    tiposTransacaoId: parseInt(
                        transacao.tiposTransacaoId.toString()
                    )
                };
            })
        ).then(result => {
            fs.unlink(fileAddress, erro => {});
            getTransacoes(req, res);
        });
    });
};
