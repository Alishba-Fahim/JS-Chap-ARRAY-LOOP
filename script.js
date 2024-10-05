
// --------------CHAP 17-20---------------------

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

let Array = [[]];
document.write(`Multidimensional Array: [] <br/><br/>`);

//=============================================================================================
// 2. Declare and initialize a multidimensional array
// representing the following matrix:

let multiarray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (let i = 0; i < multiarray.length; i++) {
    document.write(`${multiarray[i]}<br/>`);
}

//=======================================================================================================

//   3. Write a program to print numeric counting from 1 to 10.

for (let i = 1; i <= 10; i++) {
    document.write(i + `<br/>`);
};

//=================================================================================================
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

let user_table = parseInt(prompt("Enter the table number"));
let table_length = parseInt(prompt('Enter length of the Table:'));

document.write(`<br/><b>Multiplication Table of ${user_table}:</b><br/>`);

for (let i = 1; i <= table_length; i++) {
    document.write(`${user_table} x ${i} = ${user_table * i}<br/>`);
}

//========================================================================
//5. Write a program to print items of the following array
//using for loop:
//fruits = [“apple”, “banana”, “mango”, “orange”,
//“strawberry”]

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write(`${fruits} <br/><br/>`);

for (let i = 0; i < fruits.length; i++) {
    document.write(`Element at Index ${i} is ${fruits[i]} <br/>`)
};
//=================================================================================

// 6. Generate the following series in your browser. See
// example output.


// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

let counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
document.write(`<br/><b>Counting:</b> <br/>`);
for (let i = 0; i < counting.length; i++) {
    document.write(counting[i] + ", ");
}


// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

let reverse_Counting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
document.write(`<br/> <br/><b> Reverse Counting:</b> <br/>`);

reverse_Counting.reverse();
for (let i = 0; i < reverse_Counting.length; i++) {
    document.write(reverse_Counting[i] + ", ");
};

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

let evenNum = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
document.write(`<br/> <br/><b> Even:</b> <br/>`);

for (let i = 0; i < evenNum.length; i++) {
    document.write(evenNum[i] + ", ");
}

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

let oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
document.write(`<br/> <br/><b> Odd:</b> <br/>`);

for (let i = 1; i <= 20; i += 2) {
    document.write(`${i},`);
}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


let series = ["2k", "4k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"];
document.write(`<br/> <br/><b> Series:</b> <br/>`);
for (let i = 0; i < series.length; i++) {
    document.write(`${series[i]},<br/>`);
}

//=======================================================================================================

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userWant = prompt('Welcome to ABC Bakery. What do you want to order, Siri ma\'am?');

userWant = userWant.toLowerCase();
let index = A.map(item => item.toLowerCase()).indexOf(userWant);
if (index !== -1) {
    document.write(`<br/> ${userWant} is <b>Available</b> at index ${index} in our bakery.<br/>`);
} else {
    document.write(`<br/>We are sorry! ${userWant} is <b>not available</b> in our bakery.<br/>`);
}

//=====================================================================================================


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

let newNum = [24, 53, 78, 91, 12];

let largest = newNum[0];
for (let i = 1; i < newNum.length; i++) {
    if (newNum[i] > largest) {
        largest = newNum[i];
    }
}
document.write(`<br/> The Largest number in the array is: ${largest}`);


//=========================================================================================================

// 9. Write a program to identify the smallest number in the 
// given array. 
// A = [24, 53, 78, 91, 12]

let num = [24, 53, 78, 91, 12];
let smallest = num[0];

for (let i = 1; i < num.length; i++) {
    if (num[i] < smallest) {
        smallest = num[i];
    }
}
document.write(`<br/> The smallest number in the array is: ${smallest}`);


//===========================================================================================================

// 10. Write a program to print multiples of 5 ranging 1 to 
// 100.


document.write(`<br/> <br/><b> multiples of 5 ranging 1 to 100.:</b> <br/>`);
for (i = 1; i <= 20; i++) {
    document.write(`${5 * i},`);
}

///=============================END===================================================