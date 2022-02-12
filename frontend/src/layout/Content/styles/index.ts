import styled from "styled-components";

export const Container = styled.main`
margin: auto;
width; 100%;
max-width: 1500px;
`;

export const UploadFileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px 0;

    @media (min-width: 900px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const UploadedFileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    border-radius: 20px;
    color: ${({ theme }) => theme.primary};
`;

export const UploadedFileLabel = styled.div`
    margin-right: 10px;
`;

export const UploadedFileClose = styled.div``;

export const ButtonContainer = styled.div`
    margin-right: 24px;
`;

export const ButtonContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonContentLabel = styled.div``;

export const ButtonContentIcon = styled.div``;

export const NoDataFoundContainer = styled.div``;

export const NoDataFoundContainerImagem = styled.div`
    text-align: center;
`;

export const NoDataImagem = styled.img`
    width: 160px;

    @media (min-width: 900px) {
        width: 215px;
    }
`;

export const NoDataFoundContainerLabel = styled.div`
    color: ${({ theme }) => theme.secondary};
    font-size: 25px;
    text-align: center;
    font-weight: bold;

    @media (min-width: 900px) {
        font-size: 45px;
    }
`;
