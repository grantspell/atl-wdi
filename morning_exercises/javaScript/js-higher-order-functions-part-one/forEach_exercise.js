/* TO UPPERCASE - EXERCISE I */
const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];
let upperCase = []

words.forEach( function(n) {
    upperCase.push(n.toUpperCase());
})

console.log(upperCase);

/* EXERCISE II */
const doubleMe = [-1, 0, 5, 20, 43, 235];
let double = []

doubleMe.forEach( function(n) {
    double.push(n * 2);
})

console.log(double);

/* EXERCISE III */
const numbers = [2, 5, 7, 9, 33, 25, 66, 70];
let squared = []

numbers.forEach( function(n) {
    squared.push(Math.pow(n, 2));
})

console.log(squared);

/* EXERCISE IV */
const numbersArr = [5,7,9,12,20]
let total = 0;
let average = total / numbersArr.length;

numbersArr.forEach( function(n) {
    total.push();
})

console.log(average);

//RUN CODE
//node forEach_exercise.js