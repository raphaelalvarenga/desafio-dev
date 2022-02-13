import styled from "styled-components";
import Button from "../../../shared/components/Button";

export const Container = styled.nav`
    border-bottom: ${({ theme }) => `2px solid ${theme.primary}`};
    padding: 0 12px;
`;

export const ContainerArea = styled.div`
    width: 100%;
    margin: auto;
    max-width: 1500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.img`
    width: 155px;

    @media (min-width: 900px) {
        width: 250px;
    }
`;

export const LogoutContainer = styled.div``;

export const CustomButton = styled(Button)`
    background: blue;
`;
