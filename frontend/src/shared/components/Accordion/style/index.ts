import styled from "styled-components";

export const Container = styled.div`
    padding: 0 12px;
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

export const TitleBalance = styled.div``;

export const IconContainer = styled.div``;

export const Body = styled.div``;

export const ItemContainer = styled.div``;

export const ItemTitle = styled.div``;

export const ItemValue = styled.div``;
