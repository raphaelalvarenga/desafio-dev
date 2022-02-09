import {
    getDateFromTimestamp,
    getHourFromTimestamp,
    getTimestamp,
    formatGetTransacoes,
    formatCPF
} from "..";

import { dbMockTransacoes, responseMockTransacoes } from "../__mocks__";

describe("Testing helpers", () => {
    it("tests conversion from timestamp to date", () => {
        const date = getDateFromTimestamp(new Date(2022, 1, 9));
        expect(date).toBe("09/02/2022");
    });

    it("tests conversion from timestamp to hours", () => {
        const hour = getHourFromTimestamp(new Date(2022, 1, 9, 23, 40, 22));
        expect(hour).toBe("23:40:22");
    });

    it("creates a timestamp from a given date and hours", () => {
        const timestamp = getTimestamp("20190305", "154036");
        expect(timestamp).toBe("2019-03-05 15:40:36");
    });

    it("converts an array of db registers in an array of view registers", () => {
        const transacoesView = formatGetTransacoes(dbMockTransacoes);
        expect(transacoesView).toEqual(responseMockTransacoes);
    });

    it("formats a CPF", () => {
        const formattedCPF = formatCPF("123.456.7891");
        expect(formattedCPF).toBe("123.456.789-1");
    });
});
