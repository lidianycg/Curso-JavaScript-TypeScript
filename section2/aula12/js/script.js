/*alert('Mensagem'); Alert é um atalho para window.alert . Dentro do objeto window eu tenho a função alert.
window.confirm('Deseja realmente apagar?'); Retorna um valor boolean;
window.prompt('Digite o seu nome: '); Abre uma caixa com input de texto para que o usuário digite algo
Quando uma função está dentro de um objeto, chamamos de método. Quando está fora do objeto, chamamos de função.
Sempre que eu chamo uma função em JS, ela pode ou não retornar um valor.*/

let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;

alert(`O resultado é: ${resultado}`);

//Ou alert(`O resultado é: ${num1 + num2}`);