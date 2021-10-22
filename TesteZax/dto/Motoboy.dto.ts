import { LojasAntendidasENUM } from "./LojasAtendidas.enum";

export class MotoboyDTO {
  nome!: string;
  valorCobradoEntrega!: number;
  lojasAntendidas!: LojasAntendidasENUM;
}