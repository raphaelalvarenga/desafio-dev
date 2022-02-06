import { FC } from "react";
import {
    Container,
    ContainerArea,
    Logo,
    LogoContainer,
    LogoutContainer
} from "./styles";
import Button from "../../shared/components/Button";
import BycodersLogo from "../../shared/images/bycordes_.jpg";

interface ITopbar {}

const Topbar: FC<ITopbar> = () => (
    <Container>
        <ContainerArea>
            <LogoContainer>
                <Logo src={BycodersLogo} alt="Logo" />
            </LogoContainer>
            <LogoutContainer>
                <Button variant="secondary">Logout</Button>
            </LogoutContainer>
        </ContainerArea>
    </Container>
);

export default Topbar;
