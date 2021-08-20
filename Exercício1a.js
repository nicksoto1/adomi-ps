// #### Exercício 1a

// Crie uma função para verificar se um número é
// par ou impar e aplique-a na lista a seguir para imprimir quais
// números são pares e quais são ímpares.

const  evenOdd= () => {
  const listas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let lista of listas) {
    console.log(lista % 2 === 0 ? `${lista} -   PAR` : `  ${lista} -  IMPAR `);
  }
};
evenOdd();
