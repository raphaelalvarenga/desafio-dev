import { FC } from "react";
import Button from "../../shared/components/Button";
import {
    Container,
    UploadFileContainer,
    NoDataFoundContainer,
    ButtonContainer,
    ButtonContent,
    ButtonContentLabel,
    ButtonContentIcon
} from "./styles";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

interface IContent {}

const Content: FC<IContent> = () => (
    <Container>
        <UploadFileContainer>
            <ButtonContainer>
                <Button variant="secondary" style={{ width: "200px" }}>
                    <ButtonContent>
                        <ButtonContentLabel style={{ marginRight: "10px" }}>
                            Upload Arquivo
                        </ButtonContentLabel>
                        <ButtonContentIcon>
                            <AiOutlineCloudUpload size={23} />
                        </ButtonContentIcon>
                    </ButtonContent>
                </Button>
            </ButtonContainer>
            <ButtonContainer>
                <Button disabled variant="primary" style={{ width: "200px" }}>
                    <ButtonContent>
                        <ButtonContentLabel style={{ marginRight: "10px" }}>
                            Enviar Arquivo
                        </ButtonContentLabel>
                        <ButtonContentIcon>
                            <FiSend size={20} />
                        </ButtonContentIcon>
                    </ButtonContent>
                </Button>
            </ButtonContainer>
        </UploadFileContainer>
    </Container>
);

export default Content;
