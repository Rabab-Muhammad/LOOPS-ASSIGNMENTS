
//                    2. Guessing Game (Using while loop )
//Objective: Create a simple number guessing game where the user tries to guess a randomly 
//     generated number between 1 and a specified maximum value using a predefined set of guesses.
// Steps to Follow:
//1. Set a maximum value: Create a variable to store the maximum value for the number 
//   guessing game.
//2. Generate a random number: Use Math.random() and Math.floor() to generate a 
//   random number between 1 and the maximum value. Log this value to the console for 
//   development purposes.
//3. Track the guess status: Create a variable to track whether the user's guess is correct. Set 
//   it to false initially.
//4. Simulate user guesses: Use an array to store a series of predefined guesses.
//5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the 
//   correct guess is made.
//6. Check the user's guess: Inside the loop, check if the current guess matches the random 
//   number. Provide feedback if the guess is too high or too low.

const maxValue = 100;
const randomNumber = Math.floor(Math.random() * maxValue + 1);
console.log(`Random Number (for development purposes): ${randomNumber}`);

let isCorrectGuess = false;
const guesses : number[] = [10,20,30,40,50,60,70,80,90,100];

let index = 0;

while(!isCorrectGuess && index < guesses.length){
    let currentGuest = guesses[index]
    console.log(`User guess : ${currentGuest}`);

if(currentGuest === randomNumber){
    console.log(`congratulation! You guessed the correct number.`);
    isCorrectGuess = true;
}else if (currentGuest < randomNumber){
    console.log(`Your guess is to low.`);
}else{
    console.log(`Your guess is to high.`);
}
index++
}
if(!isCorrectGuess){
    console.log(`Sorry, you didn't guess the correct number.`);
}