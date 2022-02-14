import styled from "styled-components";

interface IBody {
    isOpen: boolean;
}

interface ITitleBalance {
    saldoConta: string;
}

export const Container = styled.div`
    padding: 0 12px;
    margin: 0 0 20px 0;

    @media (min-width: 900px) {
        display: none;
    }
`;

export const Title = styled.div`
    background: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    height: 55px;
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    padding: 0 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

export const TitleDescription = styled.div`
    flex: 1;
`;

export const TitleBalance = styled.div<ITitleBalance>`
    color: ${({ theme, saldoConta }) =>
        parseInt(saldoConta) < 0 ? "red" : theme.white};
`;

export const IconContainer = styled.div`
    padding: 0 12px;
`;

export const Body = styled.div<IBody>`
    height: ${({ isOpen }) => (isOpen ? "auto" : 0)};
    overflow: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transition: 0.3s;
`;
