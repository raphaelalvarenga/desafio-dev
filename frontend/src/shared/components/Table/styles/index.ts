import styled from "styled-components";

interface ITableRow {
    index: number;
}

export const CustomTable = styled.table`
    display: none;
    width: 100%;
    border-collapse: collapse;

    @media (min-width: 900px) {
        display: table;
    }
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr<ITableRow>`
    background: ${({ index }) =>
        index % 2 === 0 ? "white" : "rgb(227, 238, 250)"};
`;

export const TableHeader = styled.th`
    color: rgb(3, 235, 158);
    padding: 0 0 10px 0;
`;

export const TableColumn = styled.td`
    text-align: center;
    height: 35px;
`;
