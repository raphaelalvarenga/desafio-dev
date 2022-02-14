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
    border-bottom: ${({ theme }) => `2px solid ${theme.secondary}`};
    border-left: ${({ theme }) => `2px solid ${theme.secondary}`};
    border-right: ${({ theme }) => `2px solid ${theme.secondary}`};
`;

export const ItemTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.secondary};
    padding: 8px;
`;

export const ItemTitleContent = styled.div``;

export const ItemTitleIcon = styled.div``;

export const ItemTitle = styled.div`
    font-weight: bold;
    margin-top: 4px;
`;

export const ItemValue = styled.div`
    margin: 0 0 4px 12px;
`;

export const SubItemContainer = styled.div`
    padding: 4px 20px;
    border-top: ${({ theme }) => `2px solid ${theme.secondary}`};
`;

export const SubItemTitle = styled.div`
    font-weight: bold;
`;

export const SubItemValue = styled.div`
    margin-left: 20px;
`;
