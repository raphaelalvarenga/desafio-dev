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
    transacoes: ITransacao[];
}

const Table: FC<ITable> = ({ transacoes }) => (
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
                        descricao,
                        data,
                        hora,
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
                            {descricao}
                        </TableColumn>
                        <TableColumn>{data}</TableColumn>
                        <TableColumn>
                            {(valor as number).toFixed(2).replace(".", ",")}
                        </TableColumn>
                        <TableColumn>{cpf}</TableColumn>
                        <TableColumn>{cartao}</TableColumn>
                        <TableColumn>{hora}</TableColumn>
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
