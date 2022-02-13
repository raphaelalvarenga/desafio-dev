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
    IconContainer
} from "./style";

interface IAccordion {}

const Accordion: FC<IAccordion> = () => (
    <Container>
        <Title>
            <TitleDescription>BAR DO JOÃO</TitleDescription>
            <TitleBalance>R$ 6601,18</TitleBalance>
            <IconContainer>Ícone</IconContainer>
        </Title>

        <Body>
            <ItemContainer>
                <ItemTitle>Tipo</ItemTitle>
                <ItemValue>Recebimento Empréstimo</ItemValue>
            </ItemContainer>
            <ItemContainer>
                <ItemTitle>Data</ItemTitle>
                <ItemValue>01/03/2019</ItemValue>
            </ItemContainer>
            <ItemContainer>
                <ItemTitle>Valor</ItemTitle>
                <ItemValue>R$ 14.200</ItemValue>
            </ItemContainer>
            <ItemContainer>
                <ItemTitle>CPF</ItemTitle>
                <ItemValue>096.206.760-17</ItemValue>
            </ItemContainer>
            <ItemContainer>
                <ItemTitle>Cartão</ItemTitle>
                <ItemValue>4753****3153</ItemValue>
            </ItemContainer>
            <ItemContainer>
                <ItemTitle>Hora</ItemTitle>
                <ItemValue>15:34:53</ItemValue>
            </ItemContainer>
            <ItemContainer>
                <ItemTitle>Dono da Loja</ItemTitle>
                <ItemValue>JOÃO MACEDO</ItemValue>
            </ItemContainer>
        </Body>
    </Container>
);

export default Accordion;
