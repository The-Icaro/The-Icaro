import { CriaMotoboy } from "./helpers/CriaMotoboy";
import { LojasAntendidasENUM } from "./dto/LojasAtendidas.enum";
import { CriaLojas } from "./helpers/criaLojas";
import { InfoMotoboyEPedidosDTO } from "./dto/InfoMotoboyEPedidos.dto";
import { CalculaValor } from "./helpers/CalculaValor";
import { MOTOBOY_DATA } from "./examples/MotoboyData";
import { LOJA_DATA } from "./examples/LojaData";

function Solucao(motoboy?: number){

  let resposta = [];

  let nomeMotoboys = MOTOBOY_DATA.NOMES;
  let totalMotoboys = MOTOBOY_DATA.TOTAL_MOTOBOYS;
  let lojasAtendidasMotoboys = MOTOBOY_DATA.LOJAS_ATENDIDAS_MOTOBOY;
  let valoresEntregas = MOTOBOY_DATA.VALORES_ENTREGAS;

  const Motoboys = CriaMotoboy(nomeMotoboys, totalMotoboys, valoresEntregas, lojasAtendidasMotoboys);

  let nomesLojas = LOJA_DATA.NOMES;
  let totalLojas = LOJA_DATA.TOTAL_LOJAS;
  let totalTodosPedidos = LOJA_DATA.TOTAL_PEDIDOS;
  let totalRemuneracaoPedidos = LOJA_DATA.TOTAL_REMUNERACAO;
  let totalBonusPedido = LOJA_DATA.TOTAL_BONUS;

  const Lojas = CriaLojas(nomesLojas, totalLojas, totalTodosPedidos, totalRemuneracaoPedidos, totalBonusPedido);

  let qualMotoboy : number 

  if (motoboy) {
    qualMotoboy = motoboy - 1;
  } else {
    qualMotoboy = Math.floor(Math.random() * 5);
  }

  let motoboyEscolhido = Motoboys[qualMotoboy];
  let lojaEscolhida = Lojas[Math.floor(Math.random() * 3)];

  if(motoboyEscolhido.lojasAntendidas = LojasAntendidasENUM.PRIMEIRA)
    lojaEscolhida = Lojas[0];

  let infoMotoboy = new InfoMotoboyEPedidosDTO;
  infoMotoboy.motoboy = motoboyEscolhido;
  infoMotoboy.pedidos = lojaEscolhida.totalPedidos;

  resposta.push(infoMotoboy)
  resposta.push(lojaEscolhida)

  let valorRecebido = CalculaValor(lojaEscolhida.remuneracaoPedidos, lojaEscolhida.bonusPedido, motoboyEscolhido.valorCobradoEntrega)

  resposta.push(valorRecebido)

  return resposta

}

console.log(Solucao())