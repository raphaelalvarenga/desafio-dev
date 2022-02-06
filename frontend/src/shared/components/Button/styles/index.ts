import styled from "styled-components";

interface IContainer {
    variant: string;
}

export const Container = styled.button<IContainer>`
    background: ${({ variant }) =>
        variant === "primary" ? "#03eb9e" : "transparent"};
    border: 2px solid #03eb9e;
    color: ${({ variant }) => (variant === "primary" ? "white" : "#03eb9e")};
    font-weight: bold;
    min-width: 75px;
    min-height: 35px;
    border-radius: 5px;
`;
