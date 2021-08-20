// #### Exercício 3b-1 (desafio)
// Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array.



const fiboSum2 = () => {
  let fib = [0, 1];
  sum =  fib[1];
  for (let i = fib.length; i <= 10; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    sum += fib[i];
  }
  console.log(`  ${fib}`);
  console.log(sum);
};

fiboSum2();
