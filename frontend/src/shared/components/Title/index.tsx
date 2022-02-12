import { FC } from "react";
import {} from "./styles";

interface ITitle {
    title: string;
}

const Title: FC<ITitle> = ({ title }) => <h3 data-testid="title">{title}</h3>;

export default Title;
