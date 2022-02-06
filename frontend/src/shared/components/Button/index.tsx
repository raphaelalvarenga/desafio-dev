import { FC } from "react";
import { Container } from "./styles";

interface IButton {
    variant: string;
}
// style={{
//     background: "transparent",
//     width: "75px",
//     height: "35px",
//     border: "1px solid rgb(3, 235, 158)",
//     borderRadius: "5px",
//     color: "rgb(3, 235, 158)",
//     fontWeight: "bold"
// }}
const Button: FC<IButton> = ({ children, variant }) => (
    <Container variant={variant}>{children}</Container>
);

export default Button;
