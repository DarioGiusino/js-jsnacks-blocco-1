/* SNACK 1
Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt). Il programma stampa la somma di tutti i numeri inseriti. */

const numbers = []
const sum = document.getElementById('sum');

for (i = 0; i < 10; i++){
    const userNumber = parseInt(prompt('Inserisci un numero').trim());
    console.log(userNumber);

    numbers.push(userNumber);
}
console.log(numbers);

sum.innerText = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];