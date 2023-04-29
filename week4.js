//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

const ages = [3, 9, 23, 64, 2, 8, 28, 93]
// This array could also be written as const ages = Array(3, 9, 23, 64, 2, 8, 28, 93);. I prefer the above array writing method though.

//1.a. Programmatically subtract the value of the first element in the array from the value in the last element of the array

console.log(ages[ages.length - 1] - ages[0]);
// Arrays' element counts begin with 0. This is why you have to subtract 1 from the array's length to access the array's last elements.

//1.b. Add a new age to your array and repeat the step above to ensure it is dynamic.

ages.push(24);
console.log(ages[ages.length - 1] - ages[0]);
// You can add a new element to an array by using push() or unshift().

//1.c. Use a loop to iterate through the array and calculate the average age.

function averageAge(ages) {
    let total = 0;
    let count = 0;

    ages.forEach(function(i) {
        total += i;
        count++;
    });

    return total / count;
}

console.log(averageAge(ages));
// You can use the forEach() function to get the total elements and count how many elements there are. Then you can get the average by returning the total elements divided by the element count.

//2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//2.a. Use a loop to iterate through the array and calculate the average number of letters per name.

function averageNameLength(names) {
    let total = 0;
    let count = 0;

    names.forEach(function(i) {
        total += i.length;
        count++;
    });

    return total / count;
}

console.log(averageNameLength(names));
// Same explanation as 1.c. but since these are strings you have to use .length.

//2.b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let x = '';
for (let i = 0; i < names.length; i++) {
    x += names[i] + " ";
}
console.log(x);
// You start with creating an empty string assigned to x. Then you use the for loop to add the elements of the names array and add " " to ensure the array is separated by spaces.

//3. How do you access the last element of any array?

console.log(names[names.length - 1]);
// Arrays' element counts begin with 0. This is why you have to subtract 1 from the array's length to access the array's last elements.

//4. How do you access the first element of any array?

console.log(names[0]);
// Arrays' element counts begin with 0. To access the first element, you have to call 0.

//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

const nameLengths = names.map(myFunction);
function myFunction(names) {
    return names.length;
}
console.log(nameLengths);
// Using map() for this will find the length of each element in names and enter it into nameLengths.

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let sum = 0;
nameLengths.forEach (i => {
    sum += i;
});
console.log(sum);
// Using forEach() will add each element in nameLengths together.

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.

const helloFunction = (word, n) => {
    let x = '';
    for (let i = 0; i < n; i++) {
        x += word;
    }
    return x;
}
console.log(helloFunction('Hello', 7));
// In the function, assign x to an empty string and add the word into it. Also set i as less than the value of n to tell the function when to stop looping.

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name.

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName('Catherine', 'Osborn'));
// Using a template literal for this is the easiest method. There's no need to add " " for a space because the template literal will print exactly how you enter it.

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

const numbers = [25, 67, 83];
const otherNumbers = [2, 4, 6];
const largeNumber = i => i.reduce((a, b) => a + b, 0) > 100;
console.log(largeNumber(numbers));
console.log(largeNumber(otherNumbers));
// Using reduce() is another good way to find the sum of an array. Adding > 100 turns this function into a Boolean.

//10. Write a function that takes an array of numbers and returns the average of all elements in the array.

const getAverage = arr => {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}
console.log(getAverage(numbers));
// To get the average of this array, use reduce() to get the sum and then divide that by the array's length.

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

const arr1 = [38, 54, 93];
const arr2 = [4, 7, 5];
const whichIsGreater = (arr1, arr2) => {
    const arr1Average = arr1.reduce((a,b) => a + b, 0) / arr1.length;
    const arr2Average = arr2.reduce((a, b) => a + b, 0) / arr2.length;
    return arr1Average > arr2Average;
}
console.log(whichIsGreater(arr1, arr2));
// To get the average of these arrays, use reduce() to get the sum and then divide that by the array's length. Then you can see in the return statement if arr1's average is greater than arr2's average.

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let isHotOutside = true;
let moneyInPocket = 25.67;
const willBuyDrink = (a, b) => a === true && b > 10.50;
console.log(willBuyDrink(isHotOutside, moneyInPocket));
// Here we can use an arrow function to determine if the boolean value is true and the number is greater than 10.50. If one of these tests returns as false, the console will log false because of the use of &&. 

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

const generateRandomNumber = () => Math.floor(Math.random() * 1000000) + 1;
console.log(generateRandomNumber());
// This function generates a random number between 1 and 1,000,000. Calling random() will generate a random number between 0 and 1 so to get to 1,000,000, we have to multiply this by 1,000,000. Then to shift the range from 0 to 1, you simply add 1 to the function. floor() rounds the random number that is generated to the nearest whole number. I created this function because I wanted to learn more about methods I hadn't really worked with yet, so this gave me more knowledge on math methods. I also wanted that parameters to start with 1 because nobody ever says "Pick a number between 0 and ..." so I wanted to see how that was done as well.