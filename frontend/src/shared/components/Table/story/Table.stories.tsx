import Table from "..";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "shared/components/Table",
    component: Table
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => <Table {...args} />;

export const TableStory = Template.bind({});

TableStory.args = {
    transacoes: [
        {
            id: 1,
            descricao: "Recebimento Empréstimo",
            data: "01/03/2019",
            hora: "15:34:53",
            valor: 142.0,
            cpf: "096.206.760-17",
            cartao: "4753****3153",
            donoLoja: "MARIA JOSEFINA",
            nomeLoja: "LOJA DO Ó - MATRIZ"
        },
        {
            id: 2,
            descricao: "Vendas",
            data: "113/08/2020",
            hora: "15:32:59",
            valor: 650.48,
            cpf: "486.548.821-98",
            cartao: "4598****0159",
            donoLoja: "MARIA JOSEFINA",
            nomeLoja: "LOJA DO Ó - MATRIZ"
        },
        {
            id: 3,
            descricao: "Recebimento TED",
            data: "01/06/2019",
            hora: "12:33:33",
            valor: 506.17,
            cpf: "232.702.980-56",
            cartao: "8723****9987",
            donoLoja: "MARIA JOSEFINA",
            nomeLoja: "LOJA DO Ó - MATRIZ"
        }
    ]
};
