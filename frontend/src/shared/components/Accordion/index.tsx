import { FC } from "react";
import {
    Container,
    Title,
    TitleDescription,
    TitleBalance,
    Body,
    ItemContainer,
    ItemTitle,
    ItemValue,
    IconContainer,
    SubItemContainer,
    SubItemTitle,
    SubItemValue,
    ItemTitleContainer,
    ItemTitleContent,
    ItemTitleIcon
} from "./style";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { ITransacaoView } from "../../interfaces/transacao-view.interface";

interface IAccordion {
    transacaoView: ITransacaoView;
}

const Accordion: FC<IAccordion> = ({ transacaoView }) => (
    <Container>
        <Title>
            <TitleDescription>{transacaoView.nomeLoja}</TitleDescription>
            <TitleBalance>{transacaoView.saldoConta}</TitleBalance>
            <IconContainer>
                <IoIosArrowUp />
            </IconContainer>
        </Title>

        <Body>
            <ItemContainer>
                <ItemTitleContainer>
                    <ItemTitleContent>
                        <ItemTitle>Tipo</ItemTitle>
                        <ItemValue>Recebimento Empréstimo</ItemValue>
                    </ItemTitleContent>
                    <ItemTitleIcon>
                        <IoIosArrowUp />
                    </ItemTitleIcon>
                </ItemTitleContainer>

                <SubItemContainer>
                    <SubItemTitle>Data</SubItemTitle>
                    <SubItemValue>01/03/2019</SubItemValue>
                </SubItemContainer>
                <SubItemContainer>
                    <SubItemTitle>Valor</SubItemTitle>
                    <SubItemValue>R$ 14.200</SubItemValue>
                </SubItemContainer>
                <SubItemContainer>
                    <SubItemTitle>CPF</SubItemTitle>
                    <SubItemValue>096.206.760-17</SubItemValue>
                </SubItemContainer>
                <SubItemContainer>
                    <SubItemTitle>Cartão</SubItemTitle>
                    <SubItemValue>4753****3153</SubItemValue>
                </SubItemContainer>
                <SubItemContainer>
                    <SubItemTitle>Hora</SubItemTitle>
                    <SubItemValue>15:34:53</SubItemValue>
                </SubItemContainer>
                <SubItemContainer>
                    <SubItemTitle>Dono da Loja</SubItemTitle>
                    <SubItemValue>JOÃO MACEDO</SubItemValue>
                </SubItemContainer>
            </ItemContainer>
        </Body>
    </Container>
);

export default Accordion;
