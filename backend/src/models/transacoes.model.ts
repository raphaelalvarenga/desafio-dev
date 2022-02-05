import dbConnection from "../connection";
import { DataTypes } from "sequelize";

const Transacoes = dbConnection.define("transacoes", {
    data: DataTypes.DATE,
    valor: DataTypes.DOUBLE,
    cpf: DataTypes.STRING,
    cartao: DataTypes.STRING,
    donoLoja: DataTypes.STRING,
    nomeLoja: DataTypes.STRING
});

export default Transacoes;
