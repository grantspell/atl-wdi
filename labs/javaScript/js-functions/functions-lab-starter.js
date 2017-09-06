// Question 1
function maxOfTwoNumbers(x, y) {
    let x = 0
    let y = 1
    if (x < y)
        return y;
    if (y < x)
        return x;
}

// Question 2
function maxOfThree(x, y, z) {
    if (x > y && x > z) {
        return x;
    } if (y > x && y > z) {
        return y;
    } if (z > x && z > y) {
        return z;
    }
}

// Question 3
function isCharacterAVowel(x) {
    let vowels = ["a", "e", "i", "o", "u"];
    if (vowels.indexOf(x) !== -1) {
        return true;
    }  
        return false;
    }

// Question 4
let array = [1, 2, 3, 4];
function sumArray(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// Question 4
let array = [1, 2, 3, 4];
function multiplyArray(array) {
    let mul = array[0];
    for(let i = 0; i < array.length; i++) {
        mul *= array[i];
    }
    return mul;
}


// Question 5
var numberOfArguments = function(){
  var args = ["Arg1", "Arg2", "Arg3"]
  return args.length;
}

// Question 6
var reverseString = function (){
  let s = "This is a string"
};


// Question 7
function findLongestWord () {
  
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}
