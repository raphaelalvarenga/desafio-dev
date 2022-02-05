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
            await TiposTransacoes.bulkCreate([
                {
                    descricao: EnumTiposTransacao.DEBITO,
                    natureza: EnumNatureza.ENTRADA
                },
                {
                    descricao: EnumTiposTransacao.BOLETO,
                    natureza: EnumNatureza.SAIDA
                },
                {
                    descricao: EnumTiposTransacao.FINANCIAMENTO,
                    natureza: EnumNatureza.SAIDA
                },
                {
                    descricao: EnumTiposTransacao.CREDITO,
                    natureza: EnumNatureza.ENTRADA
                },
                {
                    descricao: EnumTiposTransacao.RECEBIMENTOEMPRESTIMO,
                    natureza: EnumNatureza.ENTRADA
                },
                {
                    descricao: EnumTiposTransacao.VENDAS,
                    natureza: EnumNatureza.ENTRADA
                },
                {
                    descricao: EnumTiposTransacao.RECEBIMENTOTED,
                    natureza: EnumNatureza.ENTRADA
                },
                {
                    descricao: EnumTiposTransacao.RECIMENTODOC,
                    natureza: EnumNatureza.ENTRADA
                },
                {
                    descricao: EnumTiposTransacao.ALUGUEL,
                    natureza: EnumNatureza.SAIDA
                }
            ]);

            await Transacoes.sync({ force, alter });
        } catch (error) {
            console.log(`Falha ao sincronizar: ${error}`);
        }
    }
}
