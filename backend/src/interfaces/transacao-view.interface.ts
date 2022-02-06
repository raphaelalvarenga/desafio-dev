import { ITransacao } from "./transacao.interface";

export interface ITransacaoView {
    nomeLoja: string;
    saldoConta: string;
    registros: ITransacao[];
}
