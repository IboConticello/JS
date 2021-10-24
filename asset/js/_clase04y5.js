// Desafio clase 4 + Desafio complementario clase 4

/* Se le solicita al user el valor que va a requerir y cuanto
es el interes que esta dispuesto a pagar, la funcion lo calcula y devuelve */

function lending (value, interest) {
    loan = value + (value * (interest/100));
    console.log ("Great! so the total amount that you'll pay is " + loan + ".");
    return loan;
}

function newLending () {
    let userValue = parseInt (prompt ("How much you want request?"));
    let userInterest = parseFloat (prompt ("How much you can pay in interest?"));
    const checkLoan = lending (userValue, userInterest);
    return checkLoan;
}

newLending();

// Se solicita un valor al user para verificar si se trata de un numero primo o no

const primeNumber = (num) =>{
    let outcome;
    let container=0;
    for (let i = 1; i <= num; i++) {
        if(num % i == 0){
            container++;
        }
    } 
    if (container == 2) {
        outcome = true;
    } else {
        outcome = false;
    }
    return outcome;
}
let userInput = parseInt(prompt("Enter a number and if it's a prime number I'll tell you true but if not, false:"));
console.log(primeNumber(userInput));

// Desafio clase 5

class Store {
    constructor (product, category, value, stock) {
        this.product = product;
        this.category = category;
        this.value = value;
        this.stock = stock;
    }
    offer() {
        if (this.value > 3000) {
            this.value = this.value * 0.75;
            console.log (this.value);
        } else {
            this.value = this.value * 0.95;
            console.log (this.value);
        }
    }
    buy (quantity) {
        if (this.stock > quantity) {
            this.stock = this.stock - quantity;
            console.log ("Congrats! you get " + quantity + ". Just left in stock " + this.stock + ". Your final amount is " + (this.value * quantity));
        } else {
            console.log ("just left in stock " + this.stock);
        }
    }
}

const tshirt1 = new Store ("Tshirt-Forky","Indumentary",1999,17);
console.log(tshirt1);
tshirt1.offer();
tshirt1.buy(1);