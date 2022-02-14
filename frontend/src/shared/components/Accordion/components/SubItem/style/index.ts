import styled from "styled-components";

interface ISubBody {
    isOpen: boolean;
}

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

export const ItemTitle = styled.div`
    font-weight: bold;
    margin-top: 4px;
`;

export const ItemTitleContent = styled.div``;

export const ItemTitleIcon = styled.div`
    padding: 0 12px;
`;

export const SubBody = styled.div<ISubBody>`
    height: ${({ isOpen }) => (isOpen ? "auto" : 0)};
    overflow: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transition: 0.3s;
`;
