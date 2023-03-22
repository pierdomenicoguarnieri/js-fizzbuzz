# Fizz Buzz

## Consegna

Scrivi un programma che stampi in console i numeri da 1 a 100.

1. Per i multipli di 3 stampi “Fizz” al posto del numero

2. Per i multipli di 5 stampi “Buzz”.

3. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

**BONUS 1:**

Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.

**BONUS 2:**

Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

## Steps

Steps da seguire:

1. Creare un ciclo for che vada da 1 a 100

2. Per ogni iterazione, tramite un if e l'uso del modulus verificare se il contatore è divisibile per:
    
    - 3 e 5 (in questo caso stampare a schermo "FizzBuzz")

    - 3 (stampare a schermo "Fizz")

    - 5 (stampare a schermo "Buzz")

Steps del bonus 1:

1. Creare nel HTML un container ed intercettarlo utilizzando il `querySelector` oppure `getElementById`

2. Creare un elemento tramite il `createElement`

3. Utilizzare `append()` nell'if all'interno del for per stampare a schermo l'output

Steps del bonus 2:

1. Sempre con la funzione `createElement` che ci permette di creare un elemento a se stante totalmente funzionante, stilizzarlo grazie all'uso di `.classList.add()`

2. Tramite l'uso di `append()` stamparlo a schermo

## References
