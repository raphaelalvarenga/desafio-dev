import { Sequelize } from "sequelize";

const database = process.env.DOCKER_DB_DATABASE as string;
const user = process.env.DOCKER_DB_USER as string;
const password = process.env.DOCKER_DB_PASSWORD as string;
const host = process.env.DOCKER_DB_HOST as string;
const dialect = process.env.DOCKER_DB_DIALECT as
    | "mysql"
    | "postgres"
    | "sqlite"
    | "mariadb"
    | "mssql"
    | undefined;

const sequelize = new Sequelize(database, user, password, {
    host,
    dialect
});

export default sequelize;
