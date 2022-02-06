import { FC, Fragment, useEffect, useState } from "react";
import Button from "../../shared/components/Button";
import {
    Container,
    UploadFileContainer,
    NoDataFoundContainer,
    ButtonContainer,
    ButtonContent,
    ButtonContentLabel,
    ButtonContentIcon,
    NoDataFoundContainerImagem,
    NoDataFoundContainerLabel,
    NoDataImagem
} from "./styles";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import NoDataImg from "../../shared/images/no_data_found.png";
import { ITransacao } from "../../shared/interfaces/transacao.interface";
import Table from "../../shared/components/Table";
import Title from "../../shared/components/Title";
import Balance from "../../shared/components/Balance";
import axios from "axios";
import { ITransacaoView } from "../../shared/interfaces/transacao-view.interface";

interface IContent {}

const Content: FC<IContent> = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [transacoesView, setTransacoesView] = useState<ITransacaoView[]>([]);

    useEffect(() => {
        getTransacoes();
    }, []);

    const getTransacoes = () => {
        setIsLoading(true);
        axios
            .get("http://localhost:3001/")
            .then(res => {
                console.log(res.data.params.data);
                setTransacoesView(res.data.params.data);
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false));
    };

    return (
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
                    <Button
                        disabled
                        variant="primary"
                        style={{ width: "200px", marginBottom: "50px" }}
                    >
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

            {!isLoading && transacoesView.length === 0 && (
                <NoDataFoundContainer>
                    <NoDataFoundContainerImagem>
                        <NoDataImagem
                            src={NoDataImg}
                            alt="no-data"
                            width={160}
                        />
                    </NoDataFoundContainerImagem>
                    <NoDataFoundContainerLabel>
                        Nenhum registro encontrado...
                    </NoDataFoundContainerLabel>
                </NoDataFoundContainer>
            )}

            {transacoesView.map(({ nomeLoja, saldoConta, registros }) => (
                <Fragment key={nomeLoja}>
                    <Title title={nomeLoja} />
                    <Table transacoes={registros} />
                    <Balance>Saldo em Conta (R$): {saldoConta}</Balance>
                </Fragment>
            ))}
        </Container>
    );
};

export default Content;
