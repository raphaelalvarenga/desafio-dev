import styled from "styled-components";

export const Container = styled.main``;

export const UploadFileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    margin-bottom: 24px;
`;

export const ButtonContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonContentLabel = styled.div``;

export const ButtonContentIcon = styled.div``;

export const NoDataFoundContainer = styled.div``;

export const NoDataFoundContainerImagem = styled.div``;

export const NoDataFoundContainerLabel = styled.div`
    color: rgb(227, 238, 250);
    font-size: 25px;
    text-align: center;
    font-weight: bold;

    @media (min-width: 900px) {
        font-size: 45px;
    }
`;
