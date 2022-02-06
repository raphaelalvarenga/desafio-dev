import { FC } from "react";
import { CSSProperties } from "styled-components";
import { Container } from "./styles";

interface IButton {
    variant: string;
    disabled?: boolean;
    style?: CSSProperties;
    postTransacoes?: () => void;
    type?: "button" | "submit";
}

const Button: FC<IButton> = ({
    children,
    variant,
    disabled,
    style,
    postTransacoes,
    type,
    ...props
}) => (
    <Container
        disabled={disabled}
        variant={variant}
        style={style}
        type={type}
        {...props}
    >
        {children}
    </Container>
);

export default Button;
