const SequelizeMock = require("sequelize-mock");
const dbMock = new SequelizeMock();

const TransacoesMock = dbMock.define(
    "transacoes",
    {
        data: "2022-02-12 11:43:20",
        valor: 500,
        cpf: "12345678910",
        cartao: "1234****4567",
        donoLoja: "João Antônio",
        nomeLoja: "Antônio Móveis",
        tiposTransacaoId: 1
    },
    {
        instanceMethods: {
            save: function () {
                // if (this.nome.length > 150) throw new Error("MAX LENGTH ERROR");
                // this.id = 2;
                return this;
            }
        }
    }
);

TransacoesMock.count = () => {
    return 10;
};

TransacoesMock.$queryInterface.$useHandler(
    (query: any, queryOptions: any, done: any) => {
        if (query === "findAll") {
            const limit = queryOptions[0].limit ?? 10;
            const result = [];
            for (let x = 0; x < limit; x++)
                result.push(
                    TransacoesMock.build({
                        id: x,
                        data: "2022-02-12 11:43:20",
                        valor: 500,
                        cpf: "12345678910",
                        cartao: "1234****4567",
                        donoLoja: "João Antônio",
                        nomeLoja: "Antônio Móveis",
                        tiposTransacaoId: 1
                    })
                );
            return result;
        }
    }
);

module.exports = TransacoesMock;
