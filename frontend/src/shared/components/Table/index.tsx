import { FC } from "react";
import {
    CustomTable,
    TableHead,
    TableBody,
    TableRow,
    TableHeader,
    TableColumn
} from "./styles";

interface ITable {}

const Table: FC<ITable> = () => (
    <CustomTable>
        <TableHead>
            <TableRow>
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
            <TableRow>
                <TableColumn style={{ textAlign: "left" }}>
                    Recebimento Empréstimo
                </TableColumn>
                <TableColumn>01/03/2019</TableColumn>
                <TableColumn>142,00</TableColumn>
                <TableColumn>096.206.760-17</TableColumn>
                <TableColumn>4753****3153</TableColumn>
                <TableColumn>15:34:53</TableColumn>
                <TableColumn>MARIA JOSEFINA</TableColumn>
                <TableColumn style={{ textAlign: "right" }}>
                    LOJA DO Ó - MATRIZ
                </TableColumn>
            </TableRow>
            <TableRow>
                <TableColumn style={{ textAlign: "left" }}>Vendas</TableColumn>
                <TableColumn>113/08/2020</TableColumn>
                <TableColumn>650,48</TableColumn>
                <TableColumn>486.548.821-98</TableColumn>
                <TableColumn>4598****0159</TableColumn>
                <TableColumn>15:32:59</TableColumn>
                <TableColumn>MARIA JOSEFINA</TableColumn>
                <TableColumn style={{ textAlign: "right" }}>
                    LOJA DO Ó - MATRIZ
                </TableColumn>
            </TableRow>
            <TableRow>
                <TableColumn style={{ textAlign: "left" }}>
                    Recebimento TED
                </TableColumn>
                <TableColumn>01/06/2019</TableColumn>
                <TableColumn>506,17</TableColumn>
                <TableColumn>232.702.980-56</TableColumn>
                <TableColumn>8723****9987</TableColumn>
                <TableColumn>12:33:33</TableColumn>
                <TableColumn>MARIA JOSEFINA</TableColumn>
                <TableColumn style={{ textAlign: "right" }}>
                    LOJA DO Ó - MATRIZ
                </TableColumn>
            </TableRow>
        </TableBody>
    </CustomTable>
);

export default Table;
