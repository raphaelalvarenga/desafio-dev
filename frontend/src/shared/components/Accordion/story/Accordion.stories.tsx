import Accordion from "..";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "shared/components/Accordion",
    component: Accordion
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = args => (
    <Accordion {...args} />
);

export const AccordionStory = Template.bind({});

AccordionStory.args = {
    transacaoView: {
        nomeLoja: "Nome da Loja",
        saldoConta: "2000",
        registros: [
            {
                id: 1,
                data: "20/02/2022",
                hora: "14:45:35",
                valor: "200",
                cpf: "123.456.789-10",
                cartao: "1458****7536",
                donoLoja: "JOÃO MACEDO",
                nomeLoja: "MACEDO STORE",
                descricao: "Financiamento"
            }
        ]
    }
};
