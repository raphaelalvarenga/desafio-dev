import { FC } from "react";
import { CustomTitle } from "./styles";

interface ITitle {
    title: string;
}

const Title: FC<ITitle> = ({ title }) => (
    <CustomTitle data-testid="title">{title}</CustomTitle>
);

export default Title;
