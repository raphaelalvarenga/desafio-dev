import { FC, useState } from "react";
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

interface IContent {}

const Content: FC<IContent> = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [transacoes, setTransacoes] = useState<ITransacao[]>([
        {
            id: 1,
            tiposTransacaoId: "Recebimento Empréstimo",
            data: "01/03/2019 15:34:53",
            valor: "142,00",
            cpf: "096.206.760-17",
            cartao: "4753****3153",
            donoLoja: "MARIA JOSEFINA",
            nomeLoja: "LOJA DO Ó - MATRIZ"
        },
        {
            id: 2,
            tiposTransacaoId: "Vendas",
            data: "113/08/2020 15:32:59",
            valor: "650,48",
            cpf: "486.548.821-98",
            cartao: "4598****0159",
            donoLoja: "MARIA JOSEFINA",
            nomeLoja: "LOJA DO Ó - MATRIZ"
        },
        {
            id: 3,
            tiposTransacaoId: "Recebimento TED",
            data: "01/06/2019 12:33:33",
            valor: "506,17",
            cpf: "232.702.980-56",
            cartao: "8723****9987",
            donoLoja: "MARIA JOSEFINA",
            nomeLoja: "LOJA DO Ó - MATRIZ"
        }
    ]);

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

            {!isLoading && transacoes.length === 0 && (
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

            {transacoes.length > 1 && (
                <>
                    <Title title="LOJA DO Ó - MATRIZ" />
                    <Table transacoes={transacoes} />
                    <Balance>Saldo em Conta (R$): 1298,65</Balance>
                    <Title title="LOJA DO Ó - MATRIZ" />
                    <Table transacoes={transacoes} />
                    <Balance>Saldo em Conta (R$): 1298,65</Balance>
                    <Title title="LOJA DO Ó - MATRIZ" />
                    <Table transacoes={transacoes} />
                    <Balance>Saldo em Conta (R$): 1298,65</Balance>
                    <Title title="LOJA DO Ó - MATRIZ" />
                    <Table transacoes={transacoes} />
                    <Balance>Saldo em Conta (R$): 1298,65</Balance>
                    <Title title="LOJA DO Ó - MATRIZ" />
                    <Table transacoes={transacoes} />
                    <Balance>Saldo em Conta (R$): 1298,65</Balance>
                    <Title title="LOJA DO Ó - MATRIZ" />
                    <Table transacoes={transacoes} />
                    <Balance>Saldo em Conta (R$): 1298,65</Balance>
                    <Title title="LOJA DO Ó - MATRIZ" />
                    <Table transacoes={transacoes} />
                    <Balance>Saldo em Conta (R$): 1298,65</Balance>
                    <Title title="LOJA DO Ó - MATRIZ" />
                    <Table transacoes={transacoes} />
                    <Balance>Saldo em Conta (R$): 1298,65</Balance>
                </>
            )}
        </Container>
    );
};

export default Content;
