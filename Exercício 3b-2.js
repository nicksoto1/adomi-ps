// #### Exercício 3b-2 (desafio)
// Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos
// valores do array. Utilize um algoritmo diferente do desafio 3b-1. (ex: se no desáfio 3b-1 seu algorítimo usou
// um loop, utilize recursão)

const fibo = () => {
  let a = 1,b = 0,soma = 0;
  for (let i = 0; i <= 10; i++) {
    soma += i;
    a = a + b;
    console.log("   " + i + "ª =", b);
    b = a - b;
  }
  console.log(soma);
};
fibo();
