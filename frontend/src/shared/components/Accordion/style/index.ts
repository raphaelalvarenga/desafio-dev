import styled from "styled-components";

export const Container = styled.div`
    padding: 0 12px;
    margin: 0 0 20px 0;
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

export const IconContainer = styled.div`
    padding: 0 12px;
`;

export const Body = styled.div``;

export const ItemContainer = styled.div`
    border-top: ${({ theme }) => `1px solid ${theme.secondary}`};
    border-bottom: ${({ theme }) => `1px solid ${theme.secondary}`};
    border-left: ${({ theme }) => `2px solid ${theme.secondary}`};
    border-right: ${({ theme }) => `2px solid ${theme.secondary}`};
    padding: 4px 8px;
`;

export const ItemTitle = styled.div`
    font-weight: bold;
`;

export const ItemValue = styled.div`
    margin-left: 20px;
`;
