import { LojasAntendidasENUM } from "../dto/LojasAtendidas.enum";
import { MotoboyDTO } from "../dto/Motoboy.dto";

export function CriaMotoboy(
  nomesMotoboys: Array<string>,
  totalMotoboys: number, 
  totalValores: Array<number>, 
  totalLojasAtendidas: Array<LojasAntendidasENUM>) : Array<MotoboyDTO>{

    let Motoboys : Array<MotoboyDTO> = [];

    for(let i = 0; i < totalMotoboys; i++) {

      var motoboy = new MotoboyDTO;
      motoboy.nome = nomesMotoboys[i];
      motoboy.valorCobradoEntrega = totalValores[i];
      motoboy.lojasAntendidas = totalLojasAtendidas[i];

      Motoboys.push(motoboy);

    }

    return Motoboys
      
}

