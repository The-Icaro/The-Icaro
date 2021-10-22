import { CriaMotoboy } from "./helpers/CriaMotoboy";
import { LojasAntendidasENUM } from "./dto/LojasAtendidas.enum";
import { CriaLojas } from "./helpers/criaLojas";
import { InfoMotoboyEPedidosDTO } from "./dto/InfoMotoboyEPedidos.dto";
import { CalculaValor } from "./helpers/CalculaValor";

function Solucao(motoboy?: number){

  let resposta = [];

  let nomeMotoboys = ['Motoboy 1', 'Motoboy 2', 'Motoboy 3', 'Motoboy 4', 'Motoboy 5'];
  let totalMotoboys = 5;
  let lojasAtendidasMotoboys = [
    LojasAntendidasENUM.TODAS,
    LojasAntendidasENUM.TODAS,
    LojasAntendidasENUM.TODAS,
    LojasAntendidasENUM.TODAS,
    LojasAntendidasENUM.PRIMEIRA
  ];
  let valoresEntregas = [2, 2, 2, 2, 3];

  const Motoboys = CriaMotoboy(nomeMotoboys, totalMotoboys, valoresEntregas, lojasAtendidasMotoboys);

  let nomesLojas = ['Loja 1', 'Loja 2', 'Loja 3'];
  let totalLojas = 3;
  let totalTodosPedidos = [3, 4, 3];
  let totalRemuneracaoPedidos = [[50, 50, 50], [50, 50, 50, 40], [50, 50, 100]];
  let totalBonusPedido = [5, 5, 15];

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

  let valorRecebido = CalculaValor(lojaEscolhida.remuneracaoPedidos, lojaEscolhida.bonusPedido)

  resposta.push(valorRecebido)

  return resposta

}

console.log(Solucao())