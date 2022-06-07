/*1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
(do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the 
result to the console.
b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.*/

//1a
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

function subtractAges() {
    for (i = 0; i < ages.length; i++); {
        console.log(ages[ages.length -1] - ages [0]);
    }
}

subtractAges();

//1b
ages.push(10);
console.log(ages);

subtractAges();

//1c - This one took me a while :0
function averageAge() {
    let sum = 0;
    for(i = 0; i < ages.length; i++) {
        sum += ages[i];
    }    
    console.log(sum / ages.length);
}

averageAge();


         
/*2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the 
result to the console.*/

//2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//2a
let lengths = names.map(function (element) {
    return element.length;
});
console.log(lengths); //checking that map is being used correctly

let averageLetters = lengths.reduce(function (preceding, currentValue) {
    return preceding + currentValue;
});
console.log(averageLetters / names.length);

//2b
let newString = "";

for (i = 0; i < names.length; i++) {
  newString = newString.concat(names[i]);
  if (i < names.length - 1) {
    newString = newString.concat(" ");
  }
}
console.log(newString);

         
//3. How do you access the last element of any array?
    //You may use the .length property
    console.log(names[names.length -1]);

//4. How do you access the first element of any array?
    //You may use it's position within the array to call it out.
    console.log(names[0]);

/*5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array*/

//5
let nameLengths = names.map(function (element) {
    return element.length;
});
console.log(nameLengths);


//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let lengthsSum = nameLengths.reduce(function (preceding, currentValue){
    return preceding + currentValue;
});
console.log(lengthsSum);

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
str = "";

function myFunction(word, n) {
    for(i = 0; i < n; i++) {
        str += word;
    }
        console.log(str);
}

myFunction('Hello', 3);

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName) {
        console.log(firstName + " " + lastName);
}
fullName('Big', 'Bopper');

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let arr = [20, 30, 40, 50];

function arrayOfNumbers(array) {
    let sum = array.reduce(function (accumulator, currentValue){
        return accumulator + currentValue;
    });
    
    if(sum > 100) {
        console.log(true);
    }
}
arrayOfNumbers(arr);

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function arrayAverage(array) {
    let arrSum = array.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;

    });
    console.log(arrSum / array.length);
  }

  arrayAverage(arr);

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
  

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
  


//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

