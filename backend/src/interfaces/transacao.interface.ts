export interface ITransacao {
    id?: number;
    data: string;
    valor: string;
    cpf: string;
    cartao: string;
    donoLoja: string;
    nomeLoja: string;
    tiposTransacaoId: string;
}
