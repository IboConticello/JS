// Ask for User name and welcome them

const BLANK = " ";

let names = prompt ("What's your name?");
let surename = prompt ("And what about your surename?");
let completeName = names + BLANK + surename

alert ("Awesome! Welcome to our page" + BLANK + completeName);
console.log ("Awesome! Welcome to our page" + BLANK + completeName);

// Asking for the user age

let year = 2021;
let userAge = parseInt (prompt ("We want to know more about you, how old are you?"));
let userAgeCalc = year - userAge

alert ("Oh! your were born in" + BLANK + userAgeCalc);
console.log ("Oh! your were born in" + BLANK + userAgeCalc);

// Asking to the user how tall is

let userHeight = parseFloat (prompt ("Last question for you, how tall are you?"));
alert ("OMG! your height is" + BLANK + userHeight + BLANK + "It's really good!");
console.log ("OMG! your height is" + BLANK + userHeight + BLANK + "It's really good!");