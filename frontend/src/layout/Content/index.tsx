import { FC } from "react";
import Button from "../../shared/components/Button";
import {
    Container,
    UploadFileContainer,
    NoDataFoundContainer,
    ButtonContainer
} from "./styles";

interface IContent {}

const Content: FC<IContent> = () => (
    <Container>
        <UploadFileContainer>
            <ButtonContainer>
                <Button variant="secondary" style={{ width: "200px" }}>
                    Upload Arquivo
                </Button>
            </ButtonContainer>
            <ButtonContainer>
                <Button disabled variant="primary" style={{ width: "200px" }}>
                    Enviar Arquivo
                </Button>
            </ButtonContainer>
        </UploadFileContainer>
    </Container>
);

export default Content;
