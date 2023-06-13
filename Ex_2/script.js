let pedroAltura = 1.50;
let lucasAltura = 1.10;
let anos = 0;

while (lucasAltura <= pedroAltura) {
  pedroAltura +=  0.02;
  lucasAltura += 0.03;
  anos++;
}

console.log(`Serão necessários, ${anos} anos, para Lucas e Pedro terem o mesmo tamanho.`);
