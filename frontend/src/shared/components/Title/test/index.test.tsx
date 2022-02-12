import { render, screen } from "@testing-library/react";
import Title from "..";

describe("Tests for Title", () => {
    test("tests the title label", () => {
        const titleText = "Planos do Sistema Txai";

        render(<Title title={titleText} />);
        const title = screen.getByTestId("title");

        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent(titleText);
    });
});
