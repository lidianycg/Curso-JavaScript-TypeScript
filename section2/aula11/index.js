/*Aritméticos + - * /
+ Adição / Concatenação
** Potenciação
% Resto da divisão 
Precedência dos operadores aritméticos () ** * / % + - 
++ Incrementa mais 1. Não pode ser utilizado em constantes. 
*/


const num1 = 10;
const num2 = 3;
console.log(num1 + num2);
console.log(num1 ** num2);
console.log(num1 % num2);

//Uma boa prática de programação é fazer primeiro o incremento e depois mostrar o valor que a variável tem.
let contador = 1;
contador ++; 
// ++contador = primeiro incrementa o valor, depois mostra o valor que possui.
console.log(contador);

let counter1 = 10;
console.log(--counter1);
console.log(--counter1);

const passo = 2;
let counter2 = 1;
counter2 = counter2 + passo;
console.log(counter2);
counter2 = counter2 + passo;
console.log(counter2);
counter2 = counter2 + passo;
console.log(counter2);

//Outra forma de fazer o contador:
let counter3 = 1;
counter3 += 2; 
counter3 += 2;
counter3 += 2;
counter3 += 2;
console.log(counter3);

//NaN - Not a number
const nm1 = 10;
const nm2 = 'Luiz';
console.log(nm1 * nm2); // A conta vai dar erro, por conter diferentes tipos de dados. Em alguns casos, a linguagem vai resolver o problema para você. Ex:quando a variável recebe let exemplo = '5';

//Como ter certeza de que um dado será do tipo numérico?
const exemplo1 = parseInt('5'); // Função que converte a string para um número inteiro
const exemplo2 = parseFloat('5.2'); //Função que converte a string para um número com casas decimais
const exemplo3 = Number('8'); //Não tem distinção. Irá entender se é inteiro, flutuante ou se não pode ser convertido.