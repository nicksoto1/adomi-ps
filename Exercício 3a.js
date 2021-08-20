// #### Exercício 3a
// Crie uma função que salve os números da série de Fibonacci até chegar em x (parâmetro) interações em um array e imprima esse array.

// (A série de Fibonacci é a seguinte: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc... Para calculá-la, o primeiro e segundo
// elementos valem 1, daí por diante, o “n-ésimo” elemento vale o (n-1)-ésimo elemento somado ao (n-2)-ésimo elemento (ex: 8 = 5 + 3))





const fibo2= () => {
  let fib = [0, 1];
  for (let i = fib.length; i <= 10; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  console.log(`  ${fib}`);
};
fibo2();