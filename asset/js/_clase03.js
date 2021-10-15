// Welcome to store and mini game

alert ("Welcome to apple reseller store, we want to play a little bit with you and of course, you can get some great cash discounts");

let numUser01 = parseInt (prompt ("Please choose a number between 1 and 10"));
alert ("Pay close attention to the answers");

for (let i = 1; i <= 10; i++) {
    let miniGame01 = numUser01 * i;
    if (i == 6) {
        continue;
    }
    alert (numUser01 + "X" + i + "=" + miniGame01);
}

alert ("As you've seen, a multiplication table is missing, to obtain 20% off, what is the missing multiplication number:");
alert ("For example: If you choose the number 2 and you didn't see 2 x 5 in the list, you should answer 5.");

let numUser02 = parseInt (prompt ("What's the number missing in the last list:"));
let miniGame02 = 6;

switch (numUser02) {
    case miniGame02:
        alert ("CONGRATS!! You get 20% off in our store with the CODE: SUDACA");
        break;
    default:
        alert ("Auch! was close but the correct answer is 6! no worries, everyday we've games for you to get a lot of cash discounts!");
        break;
}

alert ("To get 10% extra, I'll show you some fruits:");

const fruits = ["Banana", "Orange", "Watermelon", "Apple", "Melon", "Grapes"];
for (x of fruits) {
    alert (x);
}

let miniGame03 = "Apple";
let answUser = prompt ("Which do you think that is the correct fruit?");

switch (answUser) {
    case miniGame03:
        alert ("OMG! You're awesome! Get 10% extra with the CODE: NOFUTURE");
        break;
    default:
        alert ("The correct option was Apple, no worries, everyday we've games for you to get a lot of cash discounts!");
        break;
}

// Login user

let password = 9999;
let tries = 3;
let userInput = parseInt(prompt("Please use your password to keep in this site"));

while ((userInput != password) && (tries > 0)) {
    alert("Wrong!");
    userInput = parseInt(prompt(" Left " + tries + " tries. Please login with your password"));
    tries--;
}