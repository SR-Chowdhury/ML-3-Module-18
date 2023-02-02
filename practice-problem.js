/* 
    Practice Problem 1
*/

var fruits = ['Apple', 'Banana', 'Orange'];
var indexOfBanana = fruits.indexOf('Banana');

fruits[indexOfBanana] = 'Mango';
fruits.pop();
fruits.push('Watermelon');

console.log('Practice Problem 1: '+fruits+'\n');


/* 
    Practice Problem 2
*/
var grade = 85;

if (grade >= 80) {
    console.log('A');
} else if (grade >= 60) {
    console.log('B');
} else if (grade >= 50) {
    console.log('C');
} else if (grade >= 40) {
    console.log('D');
} else {
    console.log('F');
}


/* 
    Practice Problem 3
*/

// 1.a
var num1 = 173; 
var num2 = 79;
var num3 = 145;
var largestNumber;

if(num1 > num2) {
    if (num1 > num3) {
        largestNumber = num1;
    }
    else {
        largestNumber = num3;
    }
} else if (num1 < num2) {
    if (num2 < num3) {
        largestNumber = num3;
    } 
    else {
        largestNumber = num2;
    }
}

console.log('Practice Problem 3 (a): '+largestNumber+'\n');

// 2.
var x = 9; 
var y = 8;
var z = 9;
var isosceles;
if (x == y || x == z || y == z) {
    console.log('Practice Problem 3 (b): This triangle is Isosceles \n');
} else {
    console.log('Practice Problem 3 (b): This triangle is not Isosceles \n');
}

console.log(6!=6);