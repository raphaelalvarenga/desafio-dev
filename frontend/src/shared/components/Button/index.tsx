import { FC } from "react";
import { Container } from "./styles";

interface IButton {
    variant: string;
}
// style={{
//     background: "transparent",
//     width: "75px",
//     height: "35px",
//     border: "1px solid #03eb9e",
//     borderRadius: "5px",
//     color: "#03eb9e",
//     fontWeight: "bold"
// }}
const Button: FC<IButton> = ({ children, variant }) => (
    <Container variant={variant}>{children}</Container>
);

export default Button;
