// #### Exercício 2a:
// Escreva um algoritmo que armazene o valor 19 em uma variável A
// e o valor 23 em uma variável B. A seguir troque os seus conteúdos fazendo com
// que o valor que está em A passe para B e vice-versa. Ao final, escrever os
// valores que ficaram armazenados nas variáveis.

valorA = 19;
valorB = 23;

let aux = valorA;

valorA = valorB;
valorB = aux;

console.log("Valor de A agora é:", valorA);
console.log("Valor de B agora é:", valorB);
