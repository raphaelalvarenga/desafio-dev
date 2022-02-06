import styled from "styled-components";

interface IContainer {
    variant: string;
}

export const Container = styled.button<IContainer>`
    background: ${({ variant }) =>
        variant === "primary" ? "rgb(3, 235, 158)" : "transparent"};
    border: 2px solid rgb(3, 235, 158);
    color: ${({ variant }) =>
        variant === "primary" ? "white" : "rgb(3, 235, 158)"};
    font-weight: bold;
    min-width: 75px;
    min-height: 35px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
    :hover {
        background: ${({ variant }) =>
            variant === "primary" ? "#00b67a" : "rgba(3, 235, 158, 0.2)"};
        border-color: ${({ variant }) =>
            variant === "primary" ? "#00b67a" : "rgb(3, 235, 158)"};
    }
`;
