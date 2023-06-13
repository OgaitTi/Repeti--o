let n = Number(prompt("Digite o número para a tabuada: "));
let i = Number(prompt("Digite a quantidade de interações: "));


for (let h = 1; h <= i; h++) {
  let resultado = n * h;
  console.log(h + " * " + n + " = " + resultado);
}