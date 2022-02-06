import styled from "styled-components";
import Button from "../../../shared/components/Button";

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    border-bottom: 2px solid rgb(3, 235, 158);
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
