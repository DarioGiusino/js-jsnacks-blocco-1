/* L'utente inserisce un numero di 4 cifre in un input. Calcola la somma di tutte le cifre che compongono il numero e stampala in pagina.
Esempio: l'utente inserisce 1234, noi stampiamo 10. */

// prendo elementi dal dom
const inputField = document.getElementById('numbers');
const button = document.getElementById('button');
const result = document.getElementById('sum');

// aggancio evento al click del button
button.addEventListener('click', function(){
    // prendo valore dell'input
    const userInput = inputField.value;

    // separo il valore in singoli fattori
    const numbers = userInput.split('');
    console.log(numbers);

    // sommo i fattori
    const sum = parseInt(numbers[0]) + parseInt(numbers[1]) + parseInt(numbers[2]) + parseInt(numbers[3]);

    // stampo su pagina il risultato
    result.innerText = sum;
});

