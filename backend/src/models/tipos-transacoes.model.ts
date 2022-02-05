import dbConnection from "../connection";
import { DataTypes } from "sequelize";

const TiposTransacoes = dbConnection.define(
    "tipos_transacao",
    {
        descricao: DataTypes.STRING,
        natureza: DataTypes.STRING
    },
    {
        freezeTableName: true,
        tableName: "tipos_transacao"
    }
);

export default TiposTransacoes;
