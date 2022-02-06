import { FC } from "react";
import { Container, Logo, LogoContainer, LogoutContainer } from "./styles";
import Button from "../../shared/components/Button";

interface ITopbar {}

const Topbar: FC<ITopbar> = () => (
    <Container>
        <LogoContainer>
            <Logo src="https://i.imgur.com/CnbuexK.png" alt="Logo" />
        </LogoContainer>
        <LogoutContainer>
            <Button variant="secondary">Logout</Button>
        </LogoutContainer>
    </Container>
);

export default Topbar;
