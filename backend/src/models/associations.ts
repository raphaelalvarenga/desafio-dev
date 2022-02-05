import Transacoes from "./transacoes.model";
import TiposTransacoes from "./tipos-transacoes.model";

export default function associations() {
    TiposTransacoes.hasOne(Transacoes);
}
