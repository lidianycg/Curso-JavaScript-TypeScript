let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
const constaD = varA;

console.log(varA, varB, varC);

varA = varB;
varB = varC;
varC = constaD;

console.log(varA, varB, varC);

/*Outra forma de solucionar:

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC); */