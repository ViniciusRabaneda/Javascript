/* 1. No array abaixo, qual numero seleciona a ferrari? */
let carros=["BMW","Ferrari","Mercedes"];
let x = 1; /* Posição 1 */
console.log("1."+ carros[x]);

/* 2. Troque Ferrari por audi */
carros[1]="Audi"
console.log(`2. ${carros[1]}`)
/* Adicione Volvo a lista */
carros.push("volvo")
console.log(`3. ${carros}`)

/* Exiba quantos itens tem no array */
console.log(`O numero de carros é ${carros.length}`)