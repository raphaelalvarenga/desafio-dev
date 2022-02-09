import { Request, Response } from "express";
import Transacoes from "../models/transacoes.model";
import { IResponse } from "../interfaces/response.interface";
import { ITransacao } from "../interfaces/transacao.interface";
import fs from "fs";
import path from "path";
import { formatCPF, formatGetTransacoes, getTimestamp } from "../helpers";
import sequelize from "../connection";

let response: IResponse = {
    success: true,
    message: "",
    params: {}
};

let status = 0;

export const getTransacoes = (req: Request, res: Response) => {
    sequelize
        .query(
            "select tr.id, tr.data, tr.valor, tr.cpf, tr.cartao, tr.donoLoja, tr.nomeLoja, ti.descricao, ti.natureza from transacoes as tr inner join tipos_transacao as ti on tr.tiposTransacaoId = ti.id order by tr.nomeLoja"
        )
        .then((data: any[]) => {
            data = formatGetTransacoes(data[0]);
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
            const valor = (parseInt(transacao.slice(9, 19)) / 100).toString();

            const cpf = formatCPF(transacao.slice(19, 30));

            return {
                data: transacao.slice(1, 9),
                hora: transacao.slice(42, 48),
                valor,
                cpf,
                cartao: transacao.slice(30, 42),
                donoLoja: transacao.slice(48, 62).trim(),
                nomeLoja: transacao.slice(62, 81).trim(),
                descricao: transacao.slice(0, 1)
            };
        });

        Transacoes.bulkCreate(
            transacoes.map(transacao => {
                return {
                    data: getTimestamp(transacao.data, transacao.hora!),
                    valor: transacao.valor,
                    cpf: transacao.cpf,
                    cartao: transacao.cartao,
                    donoLoja: transacao.donoLoja,
                    nomeLoja: transacao.nomeLoja,
                    tiposTransacaoId: parseInt(transacao.descricao.toString())
                };
            })
        ).then(result => {
            fs.unlink(fileAddress, erro => {});
            getTransacoes(req, res);
        });
    });
};
