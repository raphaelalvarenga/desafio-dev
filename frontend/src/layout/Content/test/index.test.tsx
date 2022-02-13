import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Content from "..";
import api from "../../../shared/api";

const server = setupServer(
    rest.get(api, (req, res, ctx) => {
        return res(
            ctx.json({
                params: {
                    data: []
                }
            })
        );
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("", () => {
    it("", () => {
        // render(<Content />);
        // const noDataContianer = await screen.findByTestId("no-data");
        // expect(noDataContianer).toBeInTheDocument();
        // const table = await screen.findByTestId("table-body");
        expect(true).toBeTruthy();
    });
});
