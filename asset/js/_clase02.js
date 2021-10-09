// Ask for the favorite color of the user

let favoriteColor = prompt ("Which is your favorite color?");

if ((favoriteColor == "Blue") || (favoriteColor == "blue")) {
    alert ("Are you joking? Mine too!!!");
} else if ((favoriteColor == "Red") || (favoriteColor == "red")) {
    alert ("Well, it's really nice. My favorite color is Blue!");
} else {
    alert ("Your favorite color is " + favoriteColor + ". It's nice but the Blue team is better!");
}

// Game to User

alert ("Do you want to play a game? I'm thinking two numbers from 1 to 10, which are them?");

let gameAnswer01 = 3;
let gameAnswer02 = 9;

let userAnswer01 = parseInt (prompt ("Which is the first one?"));

if (userAnswer01 == gameAnswer01) {
    alert ("Wow, you're really good! It's true, the first number is " + gameAnswer01);
}   else if ((userAnswer01 >= 1) && (userAnswer01 < 3)) {
    alert ("So close, the first number is " + gameAnswer01);
}   else if ((userAnswer01 <= 6) && (userAnswer01 < 7)) {
    alert ("Well, so close but the first number is " + gameAnswer01);
}   else if ((userAnswer01 >= 7) && (userAnswer01 <= 10)) {
    alert ("cold cold, It's lower than that, the correct number is " + gameAnswer01);
}   else {
    alert ("Hey, pay attention! I said from 1 to 10. The correct answer is " + gameAnswer01);
}

alert ("Nice first one, try to guess the second number and I'll give you 50% in our store")

let userAnswer02 = parseInt (prompt ("Please, let me know the second number:"));

if (userAnswer02 == gameAnswer02) {
    alert ("No way! are you cheating? you get the 50% because the second number is " + gameAnswer02 + ". CONGRATS!");
}   else if ((userAnswer02 >= 1) && (userAnswer02 < 5)) {
    alert ("Ouch, you miss this oportunity but try again tomorrow, the correct number is " + gameAnswer02);
}   else if ((userAnswer02 >= 5) && (userAnswer02 <= 8)) {
    alert ("Wow, that was close, if you want to get 50% free just come tomorrow and try again, the correct option was " + gameAnswer02);
}   else if (userAnswer02 = 10) {
    alert ("Ufff, the correct number is " + gameAnswer02 + ". But I'll give you 10% off for having tried");
}   else {
    alert ("Ts ts ts, remember that we're using just numbers from 1 to 10, try tomorrow. The correct one was " + gameAnswer02);
}