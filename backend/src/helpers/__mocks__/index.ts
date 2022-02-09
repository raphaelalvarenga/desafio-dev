import { ITransacao } from "../../interfaces/transacao.interface";

export const dbMockTransacoes: ITransacao[] = [
    {
        id: 1,
        data: "2019-03-01T18:34:53.000Z",
        valor: 142,
        cpf: "096.206.760-17",
        cartao: "4753****3153",
        donoLoja: "JOÃO MACEDO",
        nomeLoja: "BAR DO JOÃO",
        descricao: "Financiamento",
        natureza: "Saída"
    },
    {
        id: 4,
        data: "2019-03-02T02:42:34.000Z",
        valor: 112,
        cpf: "096.206.760-17",
        cartao: "3648****0099",
        donoLoja: "JOÃO MACEDO",
        nomeLoja: "BAR DO JOÃO",
        descricao: "Boleto",
        natureza: "Saída"
    },
    {
        id: 5,
        data: "2019-03-02T02:30:00.000Z",
        valor: 152,
        cpf: "096.206.760-17",
        cartao: "1234****7890",
        donoLoja: "JOÃO MACEDO",
        nomeLoja: "BAR DO JOÃO",
        descricao: "Débito",
        natureza: "Entrada"
    },
    {
        id: 13,
        data: "2019-03-01T13:00:00.000Z",
        valor: 152.32,
        cpf: "556.418.150-63",
        cartao: "1234****6678",
        donoLoja: "MARIA JOSEFINA",
        nomeLoja: "LOJA DO Ó - FILIAL",
        descricao: "Crédito",
        natureza: "Entrada"
    },
    {
        id: 2,
        data: "2019-03-01T17:56:07.000Z",
        valor: 132,
        cpf: "556.418.150-63",
        cartao: "3123****7687",
        donoLoja: "MARIA JOSEFINA",
        nomeLoja: "LOJA DO Ó - MATRIZ",
        descricao: "Recebimento Empréstimo",
        natureza: "Entrada"
    },
    {
        id: 16,
        data: "2019-03-01T03:00:00.000Z",
        valor: 102,
        cpf: "556.418.150-63",
        cartao: "6228****9090",
        donoLoja: "MARIA JOSEFINA",
        nomeLoja: "LOJA DO Ó - MATRIZ",
        descricao: "Aluguel",
        natureza: "Saída"
    },
    {
        id: 9,
        data: "2019-03-01T12:00:02.000Z",
        valor: 200,
        cpf: "556.418.150-63",
        cartao: "1234****3324",
        donoLoja: "MARIA JOSEFINA",
        nomeLoja: "LOJA DO Ó - MATRIZ",
        descricao: "Débito",
        natureza: "Entrada"
    },
    {
        id: 21,
        data: "2019-03-01T20:27:12.000Z",
        valor: 192,
        cpf: "845.152.540-73",
        cartao: "6777****1313",
        donoLoja: "MARCOS PEREIRA",
        nomeLoja: "MERCADO DA AVENIDA",
        descricao: "Financiamento",
        natureza: "Saída"
    },
    {
        id: 19,
        data: "2019-03-01T15:32:22.000Z",
        valor: 2,
        cpf: "845.152.540-73",
        cartao: "2344****1222",
        donoLoja: "MARCOS PEREIRA",
        nomeLoja: "MERCADO DA AVENIDA",
        descricao: "Recebimento DOC",
        natureza: "Entrada"
    },
    {
        id: 17,
        data: "2019-06-01T13:00:00.000Z",
        valor: 506.17,
        cpf: "845.152.540-73",
        cartao: "1234****2231",
        donoLoja: "MARCOS PEREIRA",
        nomeLoja: "MERCADO DA AVENIDA",
        descricao: "Crédito",
        natureza: "Entrada"
    },
    {
        id: 14,
        data: "2019-03-01T15:32:22.000Z",
        valor: 102.03,
        cpf: "845.152.540-73",
        cartao: "2344****1222",
        donoLoja: "MARCOS PEREIRA",
        nomeLoja: "MERCADO DA AVENIDA",
        descricao: "Recebimento DOC",
        natureza: "Entrada"
    },
    {
        id: 10,
        data: "2019-03-01T17:56:07.000Z",
        valor: 802,
        cpf: "845.152.540-73",
        cartao: "3123****7687",
        donoLoja: "MARCOS PEREIRA",
        nomeLoja: "MERCADO DA AVENIDA",
        descricao: "Recebimento Empréstimo",
        natureza: "Entrada"
    },
    {
        id: 7,
        data: "2019-03-02T02:12:33.000Z",
        valor: 502,
        cpf: "845.152.540-73",
        cartao: "8473****1231",
        donoLoja: "MARCOS PEREIRA",
        nomeLoja: "MERCADO DA AVENIDA",
        descricao: "Boleto",
        natureza: "Saída"
    },
    {
        id: 6,
        data: "2019-03-01T15:33:33.000Z",
        valor: 107,
        cpf: "845.152.540-73",
        cartao: "8723****9987",
        donoLoja: "MARCOS PEREIRA",
        nomeLoja: "MERCADO DA AVENIDA",
        descricao: "Boleto",
        natureza: "Saída"
    },
    {
        id: 3,
        data: "2019-03-01T20:27:12.000Z",
        valor: 122,
        cpf: "845.152.540-73",
        cartao: "6777****1313",
        donoLoja: "MARCOS PEREIRA",
        nomeLoja: "MERCADO DA AVENIDA",
        descricao: "Financiamento",
        natureza: "Saída"
    },
    {
        id: 12,
        data: "2019-03-01T20:27:12.000Z",
        valor: 6102,
        cpf: "232.702.980-56",
        cartao: "6777****1313",
        donoLoja: "JOSÉ COSTA",
        nomeLoja: "MERCEARIA 3 IRMÃOS",
        descricao: "Financiamento",
        natureza: "Saída"
    },
    {
        id: 11,
        data: "2019-03-02T02:12:33.000Z",
        valor: 102,
        cpf: "232.702.980-56",
        cartao: "8473****1231",
        donoLoja: "JOSÉ COSTA",
        nomeLoja: "MERCEARIA 3 IRMÃOS",
        descricao: "Boleto",
        natureza: "Saída"
    },
    {
        id: 15,
        data: "2019-03-01T20:27:12.000Z",
        valor: 103,
        cpf: "232.702.980-56",
        cartao: "6777****1313",
        donoLoja: "JOSÉ COSTA",
        nomeLoja: "MERCEARIA 3 IRMÃOS",
        descricao: "Financiamento",
        natureza: "Saída"
    },
    {
        id: 8,
        data: "2019-03-01T20:27:12.000Z",
        valor: 602,
        cpf: "232.702.980-56",
        cartao: "6777****1313",
        donoLoja: "JOSÉ COSTA",
        nomeLoja: "MERCEARIA 3 IRMÃOS",
        descricao: "Financiamento",
        natureza: "Saída"
    },
    {
        id: 18,
        data: "2019-03-01T15:33:33.000Z",
        valor: 109,
        cpf: "232.702.980-56",
        cartao: "8723****9987",
        donoLoja: "JOSÉ COSTA",
        nomeLoja: "MERCEARIA 3 IRMÃOS",
        descricao: "Boleto",
        natureza: "Saída"
    },
    {
        id: 20,
        data: "2019-03-01T17:18:08.000Z",
        valor: 5,
        cpf: "232.702.980-56",
        cartao: "7677****8778",
        donoLoja: "JOSÉ COSTA",
        nomeLoja: "MERCEARIA 3 IRMÃOS",
        descricao: "Boleto",
        natureza: "Saída"
    }
];

export const responseMockTransacoes = [
    {
        nomeLoja: "BAR DO JOÃO",
        saldoConta: -102,
        registros: [
            {
                id: 1,
                data: "01/03/2019",
                valor: 142,
                cpf: "096.206.760-17",
                cartao: "4753****3153",
                donoLoja: "JOÃO MACEDO",
                nomeLoja: "BAR DO JOÃO",
                descricao: "Financiamento",
                natureza: "Saída",
                hora: "15:34:53"
            },
            {
                id: 4,
                data: "01/03/2019",
                valor: 112,
                cpf: "096.206.760-17",
                cartao: "3648****0099",
                donoLoja: "JOÃO MACEDO",
                nomeLoja: "BAR DO JOÃO",
                descricao: "Boleto",
                natureza: "Saída",
                hora: "23:42:34"
            },
            {
                id: 5,
                data: "01/03/2019",
                valor: 152,
                cpf: "096.206.760-17",
                cartao: "1234****7890",
                donoLoja: "JOÃO MACEDO",
                nomeLoja: "BAR DO JOÃO",
                descricao: "Débito",
                natureza: "Entrada",
                hora: "23:30:0"
            }
        ]
    },
    {
        nomeLoja: "LOJA DO Ó - FILIAL",
        saldoConta: 152,
        registros: [
            {
                id: 13,
                data: "01/03/2019",
                valor: 152.32,
                cpf: "556.418.150-63",
                cartao: "1234****6678",
                donoLoja: "MARIA JOSEFINA",
                nomeLoja: "LOJA DO Ó - FILIAL",
                descricao: "Crédito",
                natureza: "Entrada",
                hora: "10:0:0"
            }
        ]
    },
    {
        nomeLoja: "LOJA DO Ó - MATRIZ",
        saldoConta: 230,
        registros: [
            {
                id: 2,
                data: "01/03/2019",
                valor: 132,
                cpf: "556.418.150-63",
                cartao: "3123****7687",
                donoLoja: "MARIA JOSEFINA",
                nomeLoja: "LOJA DO Ó - MATRIZ",
                descricao: "Recebimento Empréstimo",
                natureza: "Entrada",
                hora: "14:56:7"
            },
            {
                id: 16,
                data: "01/03/2019",
                valor: 102,
                cpf: "556.418.150-63",
                cartao: "6228****9090",
                donoLoja: "MARIA JOSEFINA",
                nomeLoja: "LOJA DO Ó - MATRIZ",
                descricao: "Aluguel",
                natureza: "Saída",
                hora: "0:0:0"
            },
            {
                id: 9,
                data: "01/03/2019",
                valor: 200,
                cpf: "556.418.150-63",
                cartao: "1234****3324",
                donoLoja: "MARIA JOSEFINA",
                nomeLoja: "LOJA DO Ó - MATRIZ",
                descricao: "Débito",
                natureza: "Entrada",
                hora: "9:0:2"
            }
        ]
    },
    {
        nomeLoja: "MERCADO DA AVENIDA",
        saldoConta: 489,
        registros: [
            {
                id: 21,
                data: "01/03/2019",
                valor: 192,
                cpf: "845.152.540-73",
                cartao: "6777****1313",
                donoLoja: "MARCOS PEREIRA",
                nomeLoja: "MERCADO DA AVENIDA",
                descricao: "Financiamento",
                natureza: "Saída",
                hora: "17:27:12"
            },
            {
                id: 19,
                data: "01/03/2019",
                valor: 2,
                cpf: "845.152.540-73",
                cartao: "2344****1222",
                donoLoja: "MARCOS PEREIRA",
                nomeLoja: "MERCADO DA AVENIDA",
                descricao: "Recebimento DOC",
                natureza: "Entrada",
                hora: "12:32:22"
            },
            {
                id: 17,
                data: "01/06/2019",
                valor: 506.17,
                cpf: "845.152.540-73",
                cartao: "1234****2231",
                donoLoja: "MARCOS PEREIRA",
                nomeLoja: "MERCADO DA AVENIDA",
                descricao: "Crédito",
                natureza: "Entrada",
                hora: "10:0:0"
            },
            {
                id: 14,
                data: "01/03/2019",
                valor: 102.03,
                cpf: "845.152.540-73",
                cartao: "2344****1222",
                donoLoja: "MARCOS PEREIRA",
                nomeLoja: "MERCADO DA AVENIDA",
                descricao: "Recebimento DOC",
                natureza: "Entrada",
                hora: "12:32:22"
            },
            {
                id: 10,
                data: "01/03/2019",
                valor: 802,
                cpf: "845.152.540-73",
                cartao: "3123****7687",
                donoLoja: "MARCOS PEREIRA",
                nomeLoja: "MERCADO DA AVENIDA",
                descricao: "Recebimento Empréstimo",
                natureza: "Entrada",
                hora: "14:56:7"
            },
            {
                id: 7,
                data: "01/03/2019",
                valor: 502,
                cpf: "845.152.540-73",
                cartao: "8473****1231",
                donoLoja: "MARCOS PEREIRA",
                nomeLoja: "MERCADO DA AVENIDA",
                descricao: "Boleto",
                natureza: "Saída",
                hora: "23:12:33"
            },
            {
                id: 6,
                data: "01/03/2019",
                valor: 107,
                cpf: "845.152.540-73",
                cartao: "8723****9987",
                donoLoja: "MARCOS PEREIRA",
                nomeLoja: "MERCADO DA AVENIDA",
                descricao: "Boleto",
                natureza: "Saída",
                hora: "12:33:33"
            },
            {
                id: 3,
                data: "01/03/2019",
                valor: 122,
                cpf: "845.152.540-73",
                cartao: "6777****1313",
                donoLoja: "MARCOS PEREIRA",
                nomeLoja: "MERCADO DA AVENIDA",
                descricao: "Financiamento",
                natureza: "Saída",
                hora: "17:27:12"
            }
        ]
    },
    {
        nomeLoja: "MERCEARIA 3 IRMÃOS",
        saldoConta: -7023,
        registros: [
            {
                id: 12,
                data: "01/03/2019",
                valor: 6102,
                cpf: "232.702.980-56",
                cartao: "6777****1313",
                donoLoja: "JOSÉ COSTA",
                nomeLoja: "MERCEARIA 3 IRMÃOS",
                descricao: "Financiamento",
                natureza: "Saída",
                hora: "17:27:12"
            },
            {
                id: 11,
                data: "01/03/2019",
                valor: 102,
                cpf: "232.702.980-56",
                cartao: "8473****1231",
                donoLoja: "JOSÉ COSTA",
                nomeLoja: "MERCEARIA 3 IRMÃOS",
                descricao: "Boleto",
                natureza: "Saída",
                hora: "23:12:33"
            },
            {
                id: 15,
                data: "01/03/2019",
                valor: 103,
                cpf: "232.702.980-56",
                cartao: "6777****1313",
                donoLoja: "JOSÉ COSTA",
                nomeLoja: "MERCEARIA 3 IRMÃOS",
                descricao: "Financiamento",
                natureza: "Saída",
                hora: "17:27:12"
            },
            {
                id: 8,
                data: "01/03/2019",
                valor: 602,
                cpf: "232.702.980-56",
                cartao: "6777****1313",
                donoLoja: "JOSÉ COSTA",
                nomeLoja: "MERCEARIA 3 IRMÃOS",
                descricao: "Financiamento",
                natureza: "Saída",
                hora: "17:27:12"
            },
            {
                id: 18,
                data: "01/03/2019",
                valor: 109,
                cpf: "232.702.980-56",
                cartao: "8723****9987",
                donoLoja: "JOSÉ COSTA",
                nomeLoja: "MERCEARIA 3 IRMÃOS",
                descricao: "Boleto",
                natureza: "Saída",
                hora: "12:33:33"
            },
            {
                id: 20,
                data: "01/03/2019",
                valor: 5,
                cpf: "232.702.980-56",
                cartao: "7677****8778",
                donoLoja: "JOSÉ COSTA",
                nomeLoja: "MERCEARIA 3 IRMÃOS",
                descricao: "Boleto",
                natureza: "Saída",
                hora: "14:18:8"
            }
        ]
    }
];
