import { FC } from "react";
import { ITransacao } from "../../interfaces/transacao.interface";
import {
    CustomTable,
    TableHead,
    TableBody,
    TableRow,
    TableHeader,
    TableColumn
} from "./styles";

interface ITable {
    // transacoes: ITransacao[]
}

const transacoes: ITransacao[] = [
    {
        id: 1,
        tiposTransacaoId: "Recebimento Empréstimo",
        data: "01/03/2019 15:34:53",
        valor: "142,00",
        cpf: "096.206.760-17",
        cartao: "4753****3153",
        donoLoja: "MARIA JOSEFINA",
        nomeLoja: "LOJA DO Ó - MATRIZ"
    },
    {
        id: 2,
        tiposTransacaoId: "Vendas",
        data: "113/08/2020 15:32:59",
        valor: "650,48",
        cpf: "486.548.821-98",
        cartao: "4598****0159",
        donoLoja: "MARIA JOSEFINA",
        nomeLoja: "LOJA DO Ó - MATRIZ"
    },
    {
        id: 3,
        tiposTransacaoId: "Recebimento TED",
        data: "01/06/2019 12:33:33",
        valor: "506,17",
        cpf: "232.702.980-56",
        cartao: "8723****9987",
        donoLoja: "MARIA JOSEFINA",
        nomeLoja: "LOJA DO Ó - MATRIZ"
    }
];

const Table: FC<ITable> = () => (
    <CustomTable>
        <TableHead>
            <TableRow index={0}>
                <TableHeader style={{ textAlign: "left" }}>Tipo</TableHeader>
                <TableHeader>Data</TableHeader>
                <TableHeader>Valor (R$)</TableHeader>
                <TableHeader>CPF</TableHeader>
                <TableHeader>Cartão</TableHeader>
                <TableHeader>Hora</TableHeader>
                <TableHeader>Dono da Loja</TableHeader>
                <TableHeader style={{ textAlign: "right" }}>
                    Nome da Loja
                </TableHeader>
            </TableRow>
        </TableHead>
        <TableBody>
            {transacoes.map(
                (
                    {
                        id,
                        tiposTransacaoId,
                        data,
                        valor,
                        cpf,
                        cartao,
                        donoLoja,
                        nomeLoja
                    },
                    index
                ) => (
                    <TableRow index={index} key={id}>
                        <TableColumn style={{ textAlign: "left" }}>
                            {tiposTransacaoId}
                        </TableColumn>
                        <TableColumn>{data}</TableColumn>
                        <TableColumn>{valor}</TableColumn>
                        <TableColumn>{cpf}</TableColumn>
                        <TableColumn>{cartao}</TableColumn>
                        <TableColumn>{data}</TableColumn>
                        <TableColumn>{donoLoja}</TableColumn>
                        <TableColumn style={{ textAlign: "right" }}>
                            {nomeLoja}
                        </TableColumn>
                    </TableRow>
                )
            )}
        </TableBody>
    </CustomTable>
);

export default Table;
