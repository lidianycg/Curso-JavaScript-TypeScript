//Dados primitivos - String, number, undefined, null, boolean, symbol

const nome = 'Luiz'; //String
const nome1 = "Luiz"; //String
const nome2 = `Luiz`; //String
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined -> Não aponta para lugar nenhum na memória;
let sobrenomeAluno = null; // Nulo -> Não aponta para lugar nenhum na memória;
const aprovado = false; // Boolean = Pode ser apenas true ou false (lógico);

console.log(typeof nome, nome);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof nomeAluno, nomeAluno);

const a = [1,2];
const b = a;
console.log(a,b);

let c = 2;
const d = c;
console.log(c, d); //2,2

c = 3;
console.log(c, d); //3,2

