let numeros = [];
let positivos = 0;
let negativos = 0;

for (let i = 1; i <= 10; i++) {
  let numero = Number(prompt(`Digite o número ${i}:`));
  numeros.push(numero);

  if (numero > 0) {
    positivos++;
  } else if (numero < 0) {
    negativos++;
  }
}

let soma = numeros.reduce((a, b) => a + b, 0);
let media = soma / numeros.length;


let percentualPositivos = (positivos / numeros.length) * 100;
let percentualNegativos = (negativos / numeros.length) * 100;


console.log(`Média aritmética: ${media.toFixed(2)}`);
console.log(`Quantidade de valores positivos: ${positivos}`);
console.log(`Quantidade de valores negativos: ${negativos}`);
console.log(`Percentual de valores positivos: ${percentualPositivos.toFixed(2)}%`);
console.log(`Percentual de valores negativos: ${percentualNegativos.toFixed(2)}%`);
