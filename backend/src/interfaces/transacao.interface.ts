export interface ITransacao {
    id?: number;
    data: string;
    hora: string;
    valor: string | number;
    cpf: string;
    cartao: string;
    donoLoja: string;
    nomeLoja: string;
    descricao: string;
    tiposTransacaoId?: number;
}
