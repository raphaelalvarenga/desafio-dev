import associations from "./associations";
import Transacoes from "./transacoes.model";
import TiposTransacoes from "./tipos-transacoes.model";
import { EnumTiposTransacao } from "../enums/tipos-transacao.enum";
import { EnumNatureza } from "../enums/natureza-transacao.enum";

export default async function sync() {
    const force = false;
    const alter = false;
    const env = process.env.environment;

    console.log(`A M B I E N T E: ${env}`);

    if (env !== "production" && env !== "test" && env !== "development") {
        throw `Environment variable '${env}' not listed!`;
    } else if (force && (env === "production" || env === "test")) {
        throw `Sync force not allowed in ${env}`;
    } else {
        associations();

        try {
            await TiposTransacoes.sync({ force, alter });

            const countTiposTransacao = await TiposTransacoes.findAndCountAll();

            if (countTiposTransacao.count === 0) {
                await TiposTransacoes.bulkCreate([
                    {
                        descricao: "Débito",
                        natureza: EnumNatureza.ENTRADA
                    },
                    {
                        descricao: "Boleto",
                        natureza: EnumNatureza.SAIDA
                    },
                    {
                        descricao: "Financiamento",
                        natureza: EnumNatureza.SAIDA
                    },
                    {
                        descricao: "Crédito",
                        natureza: EnumNatureza.ENTRADA
                    },
                    {
                        descricao: "Recebimento Empréstimo",
                        natureza: EnumNatureza.ENTRADA
                    },
                    {
                        descricao: "Vendas",
                        natureza: EnumNatureza.ENTRADA
                    },
                    {
                        descricao: "Recebimento TED",
                        natureza: EnumNatureza.ENTRADA
                    },
                    {
                        descricao: "Recebimento DOC",
                        natureza: EnumNatureza.ENTRADA
                    },
                    {
                        descricao: "Aluguel",
                        natureza: EnumNatureza.SAIDA
                    }
                ]);
            }

            await Transacoes.sync({ force, alter });
        } catch (error) {
            console.log(`Falha ao sincronizar: ${error}`);
        }
    }
}
