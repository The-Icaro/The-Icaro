import { LojaDTO } from "../dto/Lojas.dto";

export function CriaLojas(
  todosNomes: Array<string>,
  totalLojas: number, 
  totalTodosPedidos: Array<number>,
  totalRemuneracaoPedidos: Array<Array<number>>,
  totalBonusPedido: Array<number>) : Array<LojaDTO> {

    let Lojas : Array<LojaDTO> = [];

    for(let i = 0; i < totalLojas; i++) {

      var loja = new LojaDTO;
      loja.nome = todosNomes[i];
      loja.totalPedidos = totalTodosPedidos[i];
      loja.remuneracaoPedidos = totalRemuneracaoPedidos[i];
      loja.bonusPedido = totalBonusPedido[i];

    }

    return Lojas

}