import { FC } from "react";
import {} from "./styles";

interface ITitle {}

const Title: FC<ITitle> = ({ children }) => <span>{children}</span>;

export default Title;
