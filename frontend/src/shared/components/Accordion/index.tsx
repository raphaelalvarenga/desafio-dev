import { FC, useState } from "react";
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

const Accordion: FC<IAccordion> = ({ transacaoView }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Container onClick={() => setIsOpen(!isOpen)}>
            <Title>
                <TitleDescription>{transacaoView.nomeLoja}</TitleDescription>
                <TitleBalance>{transacaoView.saldoConta}</TitleBalance>
                <IconContainer>
                    {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </IconContainer>
            </Title>

            <Body isOpen={isOpen}>
                {transacaoView.registros.map(registro => (
                    <ItemContainer key={registro.id}>
                        <ItemTitleContainer>
                            <ItemTitleContent>
                                <ItemTitle>Tipo</ItemTitle>
                                <ItemValue>{registro.descricao}</ItemValue>
                            </ItemTitleContent>
                            <ItemTitleIcon>
                                <IoIosArrowUp />
                            </ItemTitleIcon>
                        </ItemTitleContainer>

                        <SubItemContainer>
                            <SubItemTitle>Data</SubItemTitle>
                            <SubItemValue>{registro.data}</SubItemValue>
                        </SubItemContainer>
                        <SubItemContainer>
                            <SubItemTitle>Valor</SubItemTitle>
                            <SubItemValue>R$ {registro.valor}</SubItemValue>
                        </SubItemContainer>
                        <SubItemContainer>
                            <SubItemTitle>CPF</SubItemTitle>
                            <SubItemValue>{registro.cpf}</SubItemValue>
                        </SubItemContainer>
                        <SubItemContainer>
                            <SubItemTitle>Cartão</SubItemTitle>
                            <SubItemValue>{registro.cartao}</SubItemValue>
                        </SubItemContainer>
                        <SubItemContainer>
                            <SubItemTitle>Hora</SubItemTitle>
                            <SubItemValue>{registro.hora}</SubItemValue>
                        </SubItemContainer>
                        <SubItemContainer>
                            <SubItemTitle>Dono da Loja</SubItemTitle>
                            <SubItemValue>{registro.donoLoja}</SubItemValue>
                        </SubItemContainer>
                    </ItemContainer>
                ))}
            </Body>
        </Container>
    );
};

export default Accordion;
