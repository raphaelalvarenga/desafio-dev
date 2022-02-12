import styled from "styled-components";

interface IContainer {
    variant: string;
}

export const Container = styled.button<IContainer>`
    background: ${({ variant, theme }) =>
        variant === "primary" ? theme.primary : "transparent"};
    border: ${({ theme }) => `2px solid ${theme.primary}`};
    color: ${({ variant, theme }) =>
        variant === "primary" ? "white" : theme.primary};
    font-weight: bold;
    min-width: 75px;
    min-height: 35px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
    :disabled {
        background: ${({ theme }) => theme.secondary};
        border-color: ${({ theme }) => theme.secondary};
        color: white;
        cursor: auto;
        :hover {
            background: ${({ theme }) => theme.secondary};
            border-color: ${({ theme }) => theme.secondary};
        }
    }
    :hover {
        background: ${({ variant, theme }) =>
            variant === "primary" ? theme.primaryDark : theme.primaryOpacity};
        border-color: ${({ variant, theme }) =>
            variant === "primary" ? theme.primaryDark : theme.primary};
    }
`;
