import { FC } from "react";
import { Container } from "./styles";

interface IBalance {}

const Balance: FC<IBalance> = ({ children }) => (
    <Container>{children}</Container>
);

export default Balance;
