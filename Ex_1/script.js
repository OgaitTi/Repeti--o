let alturas = [];

for (let i = 1; i <= 15; i++) {
  let altura = prompt("Digite a altura da pessoa " + i + ":");
  alturas.
 
push(parseFloat(altura));
}

let menorAltura = alturas[0];
let maiorAltura = alturas[0];

for (let i = 1; i < alturas.length; i++) {
  if (alturas[i] < menorAltura) {
    menorAltura = alturas[i];
  }
  
   
if (alturas[i] > maiorAltura) {
    maiorAltura = alturas[i];
  }
}

console.log("Menor altura: " + menorAltura);
console.log("Maior altura: " + maiorAltura);