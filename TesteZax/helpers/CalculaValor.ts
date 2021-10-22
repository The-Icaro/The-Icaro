export function CalculaValor(valores: Array<number>, bonus: number, cobranca: number) : number {

  let valorTotal = 0;
  const bonusConvertido = bonus / 100;

  for(let i = 0; i < valores.length; i++){
    let valorAdicionar = (valores[i] + cobranca) + valores[i] * bonusConvertido;
    valorTotal += valorAdicionar;
  }

  return valorTotal;

}