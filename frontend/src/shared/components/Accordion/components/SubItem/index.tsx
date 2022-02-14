import { FC, useState } from "react";
import {
    ItemContainer,
    ItemTitle,
    ItemValue,
    SubItemContainer,
    SubItemTitle,
    SubItemValue,
    ItemTitleContainer,
    ItemTitleContent,
    ItemTitleIcon,
    SubBody
} from "./style";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { ITransacao } from "../../../../interfaces/transacao.interface";

interface ISubItem {
    registro: ITransacao;
}

const SubItem: FC<ISubItem> = ({ registro }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <ItemContainer key={registro.id}>
            <ItemTitleContainer onClick={() => setIsOpen(!isOpen)}>
                <ItemTitleContent>
                    <ItemTitle>Tipo</ItemTitle>
                    <ItemValue>{registro.descricao}</ItemValue>
                </ItemTitleContent>
                <ItemTitleIcon>
                    {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </ItemTitleIcon>
            </ItemTitleContainer>

            <SubBody isOpen={isOpen}>
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
            </SubBody>
        </ItemContainer>
    );
};

export default SubItem;
