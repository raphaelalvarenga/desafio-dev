import associations from "./associations";
import Transacoes from "./transacoes.model";
import TiposTransacoes from "./tipos-transacoes.model";

export default async function sync() {
    const force = true;
    const alter = true;
    const env = process.env.environment;

    console.log(`A M B I E N T E: ${env}`);

    if (env !== "production" && env !== "test" && env !== "development") {
        throw `Environment variable '${env}' not listed!`;
    } else if (force && (env === "production" || env === "test")) {
        throw `Sync force not allowed in ${env}`;
    } else {
        associations();

        try {
            await TiposTransacoes.sync({ force, alter });
            await Transacoes.sync({ force, alter });
        } catch (error) {
            console.log(`Falha ao sincronizar: ${error}`);
        }
    }
}
