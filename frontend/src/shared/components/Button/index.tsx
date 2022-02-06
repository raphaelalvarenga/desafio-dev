import { FC } from "react";
import { CSSProperties } from "styled-components";
import { Container } from "./styles";

interface IButton {
    variant: string;
    disabled?: boolean;
    style?: CSSProperties;
}

const Button: FC<IButton> = ({ children, variant, disabled, style }) => (
    <Container disabled={disabled} variant={variant} style={style}>
        {children}
    </Container>
);

export default Button;
