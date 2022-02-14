import { FC, useState } from "react";
import {
    Container,
    Title,
    TitleDescription,
    TitleBalance,
    Body,
    IconContainer
} from "./style";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { ITransacaoView } from "../../interfaces/transacao-view.interface";
import SubItem from "./components/SubItem";

interface IAccordion {
    transacaoView: ITransacaoView;
}

const Accordion: FC<IAccordion> = ({ transacaoView }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Container>
            <Title onClick={() => setIsOpen(!isOpen)}>
                <TitleDescription>{transacaoView.nomeLoja}</TitleDescription>
                <TitleBalance saldoConta={transacaoView.saldoConta}>
                    R${" "}
                    {parseInt(transacaoView.saldoConta)
                        .toFixed(2)
                        .replace(".", ",")}
                </TitleBalance>
                <IconContainer>
                    {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </IconContainer>
            </Title>

            <Body isOpen={isOpen}>
                {transacaoView.registros.map(registro => (
                    <SubItem key={registro.id} registro={registro} />
                ))}
            </Body>
        </Container>
    );
};

export default Accordion;
