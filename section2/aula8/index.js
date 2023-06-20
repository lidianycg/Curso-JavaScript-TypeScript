/* 
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; //peso / (altura*altura)
let anoNascimento;

imc = peso / (alturaEmM*alturaEmM);
anoNascimento = 2023 - idade;


console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg.');
console.log('Tem', alturaEmM, 'de altura e seu imc é de', imc);
console.log('Luiz Otávio nasceu em', anoNascimento);

//Uma forma diferente de fazer:
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg.');

//Template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg.`);
console.log(`Tem ${alturaEmM} de altura e seu imc é de ${imc}`);
console.log(`Luiz Otávio nasceu em ${anoNascimento}`);
