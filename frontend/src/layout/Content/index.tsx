import React, {
    FC,
    Fragment,
    useEffect,
    useState,
    useRef,
    MutableRefObject
} from "react";
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
    NoDataImagem,
    UploadedFileContainer,
    UploadedFileLabel
} from "./styles";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import NoDataImg from "../../shared/images/no_data_found.png";
import Table from "../../shared/components/Table";
import Title from "../../shared/components/Title";
import Balance from "../../shared/components/Balance";
import axios from "axios";
import { ITransacaoView } from "../../shared/interfaces/transacao-view.interface";
import api from "../../shared/api";
import Accordion from "../../shared/components/Accordion";

interface IContent {}

const Content: FC<IContent> = () => {
    const inputFile = useRef() as MutableRefObject<HTMLInputElement>;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [transacoesView, setTransacoesView] = useState<ITransacaoView[]>([]);
    const [selectedFile, setSelectedFile] = useState<string | File>("");

    useEffect(() => {
        getTransacoes();
    }, []);

    const getTransacoes = () => {
        setIsLoading(true);
        axios
            .get(api)
            .then(res => {
                setTransacoesView(res.data.params.data);
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false));
    };

    const postTransacoes = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("file", selectedFile);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };

        axios
            .post(api, formData, config)
            .then(res => setTransacoesView(res.data.params.data))
            .catch(error => console.log(error));
    };

    const handleUploadFileButton = () => {
        inputFile.current.click();
    };

    return (
        <Container>
            <form onSubmit={postTransacoes} encType="multipart/form-data">
                <UploadFileContainer>
                    <ButtonContainer>
                        <input
                            type="file"
                            name="file"
                            ref={inputFile}
                            onChange={(e: any) => {
                                console.log(e.target.files[0]);
                                setSelectedFile(e.target.files[0]);
                            }}
                            hidden
                        />
                        <Button
                            variant="secondary"
                            style={{ width: "200px" }}
                            handleUploadFileButton={handleUploadFileButton}
                            type="button"
                        >
                            <ButtonContent>
                                <ButtonContentLabel
                                    style={{ marginRight: "10px" }}
                                >
                                    Upload Arquivo
                                </ButtonContentLabel>
                                <ButtonContentIcon>
                                    <AiOutlineCloudUpload size={23} />
                                </ButtonContentIcon>
                            </ButtonContent>
                        </Button>
                    </ButtonContainer>
                    {selectedFile !== "" && (
                        <UploadedFileContainer>
                            <UploadedFileLabel>
                                {(selectedFile as File).name}
                            </UploadedFileLabel>
                        </UploadedFileContainer>
                    )}
                </UploadFileContainer>
                <ButtonContainer>
                    <Button
                        disabled={selectedFile === ""}
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
            </form>
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
                    <Accordion />

                    <Title title={nomeLoja} />
                    <Table transacoes={registros} />
                    <Balance>
                        Saldo em Conta:{" "}
                        <span
                            style={{
                                color:
                                    parseInt(saldoConta) < 0 ? "red" : "black"
                            }}
                        >
                            R${" "}
                            {parseInt(saldoConta).toFixed(2).replace(".", ",")}
                        </span>
                    </Balance>
                </Fragment>
            ))}
        </Container>
    );
};

export default Content;
