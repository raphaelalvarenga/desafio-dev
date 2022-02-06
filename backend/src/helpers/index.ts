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
                saldoConta: parseInt(saldoConta.toFixed(2)),
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
                saldoConta: parseInt(saldoConta.toFixed(2)),
                registros: [transacao]
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
