import { EnumNatureza } from "../enums/natureza-transacao.enum";
import { ITransacao } from "../interfaces/transacao.interface";

export const getDateFromTimestamp = (date: Date) => {
    const dia = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const mes =
        date.getMonth() + 1 < 10
            ? `0${date.getMonth() + 1}`
            : date.getMonth() + 1;
    const ano = date.getFullYear();

    return `${dia}/${mes}/${ano}`;
};

export const getHourFromTimestamp = (date: Date) => {
    const horas = date.getHours();
    const minutos = date.getMinutes();
    const segundos = date.getSeconds();

    return `${horas}:${minutos}:${segundos}`;
};

export const getTimestamp = (data: string, hora: string) => {
    data = [data.slice(0, 4), "-", data.slice(4, 6), "-", data.slice(6)].join(
        ""
    );

    hora = [hora.slice(0, 2), ":", hora.slice(2, 4), ":", hora.slice(4)].join(
        ""
    );

    return `${data} ${hora}`;
};

export const formatGetTransacoes = (transacoes: ITransacao[]) => {
    let nomeLoja = "";
    let saldoConta = 0;
    const result: any[] = [];

    transacoes.forEach((transacao, index) => {
        if (nomeLoja === transacao.nomeLoja) {
            saldoConta =
                transacao.natureza === EnumNatureza.ENTRADA
                    ? saldoConta + (transacao.valor as number)
                    : saldoConta - (transacao.valor as number);

            result[result.length - 1] = {
                ...result[result.length - 1],
                saldoConta: parseInt(saldoConta.toFixed(2)),
                registros: [
                    ...result[result.length - 1].registros,
                    {
                        ...transacao,
                        data: getDateFromTimestamp(new Date(transacao.data)),
                        hora: getHourFromTimestamp(new Date(transacao.data))
                    }
                ]
            };
        } else {
            nomeLoja = transacao.nomeLoja;
            saldoConta = 0;
            saldoConta =
                transacao.natureza === EnumNatureza.ENTRADA
                    ? saldoConta + (transacao.valor as number)
                    : saldoConta - (transacao.valor as number);

            result.push({
                nomeLoja,
                saldoConta: parseInt(saldoConta.toFixed(2)),
                registros: [
                    {
                        ...transacao,
                        data: getDateFromTimestamp(new Date(transacao.data)),
                        hora: getHourFromTimestamp(new Date(transacao.data))
                    }
                ]
            });
        }
    });

    return result;
};

export const formatCPF = (cpf: string) => {
    cpf = cpf.replace(/[^0-9]/g, "");

    if (cpf.length > 3) {
        cpf = [cpf.slice(0, 3), ".", cpf.slice(3)].join("");
    }

    if (cpf.length > 7) {
        cpf = [cpf.slice(0, 7), ".", cpf.slice(7)].join("");
    }

    if (cpf.length > 11) {
        cpf = [cpf.slice(0, 11), "-", cpf.slice(11)].join("");
    }

    return cpf;
};
