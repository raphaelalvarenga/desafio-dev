import { FC } from "react";
import {} from "./styles";

interface ITitle {
    title: string;
}

const Title: FC<ITitle> = ({ title }) => <h3>{title}</h3>;

export default Title;
