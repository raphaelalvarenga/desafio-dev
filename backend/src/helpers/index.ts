import { EnumNatureza } from "../enums/natureza-transacao.enum";

export const getTimestamp = (data: string, hora: string) => {
    data = [data.slice(0, 4), "-", data.slice(4, 6), "-", data.slice(6)].join(
        ""
    );

    hora = [hora.slice(0, 2), ":", hora.slice(2, 4), ":", hora.slice(4)].join(
        ""
    );

    return `${data} ${hora}`;
};

export const formatGetTransacoes = (transacoes: any[][]) => {
    let nomeLoja = "";
    let saldoConta = 0;
    const result: any[] = [];

    transacoes[0].forEach((transacao, index) => {
        if (nomeLoja === transacao.nomeLoja) {
            saldoConta =
                transacao.natureza === EnumNatureza.ENTRADA
                    ? saldoConta + transacao.valor
                    : saldoConta - transacao.valor;

            result[result.length - 1] = {
                ...result[result.length - 1],
                saldoConta,
                registros: [...result[result.length - 1].registros, transacao]
            };
        } else {
            nomeLoja = transacao.nomeLoja;
            saldoConta = 0;
            saldoConta =
                transacao.natureza === EnumNatureza.ENTRADA
                    ? saldoConta + transacao.valor
                    : saldoConta - transacao.valor;

            result.push({
                nomeLoja,
                saldoConta,
                registros: [transacao]
            });
        }
    });
    return result;
};
