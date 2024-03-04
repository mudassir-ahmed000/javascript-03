// ASSIGNMENT-18 
// User Input And Conditional Statements
// Chapter 9-11



// var city = prompt("Enter City Name");
// if(city  === "Karachi"){
//     document.write("Welcome to the city of lights")
// }

// var gender = prompt("Enter gender");
// if(gender  === "male"){
//     document.write("Goof morning Sir!")
// }
// else{
//     document.write("Good morning Ma'am!")
// }

// var trafficColor = prompt("Enter traffic color");
// if(trafficColor === "red"){
//     document.write("must stop")
// }
// else if(trafficColor === "yellow"){ 
//     document.write("ready to move")
// }
// else if(trafficColor === "green"){
//          document.write("move now")
// }
// else{
//     document.write("you entered wrong color")
// }



// var fuel = prompt("Enter remaining fuel in car in litres");
// if(fuel < "0.25 litre"){
//     document.write("Plz refill the fuel in the car")
// }
// else{ 
//     document.write("drive for some more time")
// }



// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }


// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// else{
//     alert("given condition for variable b is false")
// }



// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }



// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }



// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }



// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


// document.write("<h1>" + "MarkSheet" + "</h1>")
// var marksObtained = prompt("enter obtained marks");
// document.write("Obtained Marks : " + marksObtained)
// var totalMarks = prompt("Enter Total marks");
// document.write("Total Marks : " + totalMarks)
// var percentage = marksObtained/totalMarks*100;
// document.write("Percentage : " + percentage);

// var grade = "";
// if(percentage >= 80 && percentage < 100 ){
//     document.write(grade == "A-one" + "<br>")
//     document.write("Excellent")
//     }
//     else if(percentage >= 70 && percentage < 80){
//         document.write(grade == "A" + "<br>")
//         document.write("GOOD")
//     }
//     else if(percentage >= 60 && percentage < 70){
//         document.write(grade == "C" + "<br>")
//         document.write("You need to improve")
//     }
//     else if(percentage >= 0 && percentage < 60){
//         document.write(grade == "Fail" + "<br>")
//         document.write("Sorry")
//     }
//     else{
//         document.write("You entered wrong value" + "<br>")
//     }
// document.write("Grade : " + grade)
// var remarks = "";
// document.write("Remarks : " + remarks);


// var num = 4;
// var guess = +prompt("Guess one number from 1 to 10");
// if(guess === num){
//     document.write("BINGO!Correct Answer")
// }
// else if(guess == 5){
//     document.write("You are enough close")
// }
// else{
//     document.write("Try Again")
// }


// var num = +prompt("Enter number");
// if(num%3 === 0){
//     document.write("The number is divisible by 3")
// }
// else{
//     document.write(num)
// }




// var number = +prompt("Enter a number:");
// if (number % 2 === 0) {
//    document.write("Even Number")
// } else {
//    document.write("Odd Number")
// }




// var temperature = +prompt("Enter the temperature:");
// if (temperature > 40) {
//     document.write("It is too hot outside.");
// } else if (temperature > 30) {
//     document.write("The Weather today is Normal.");
// } else if (temperature > 20)
//    {document.write("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     document.write("OMG! Today’s weather is so Cool.");
// } else {
//     document.write("The temperature is too low to determine the weather.");
// }




// var firstNumber = +(prompt("Enter the first number:"));
// var secondNumber = +(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");
// var result;
// if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     document.write("Please enter valid numbers.");
// } else {
//     if (operation === '+') {
//         result = firstNumber + secondNumber;
//         document.write(result)
//     } else if (operation === '-') {
//         result = firstNumber - secondNumber;
//         document.write(result)
//     } else if (operation === '*') {
//         result = firstNumber * secondNumber;
//         document.write(result)
//     } else if (operation === '/') {
//         if (secondNumber !== 0) {
//             result = firstNumber / secondNumber;
//             document.write(result)
//         } else {
//             document.write("Cannot divide by zero.");
//         }
//     } else if (operation === '%') {
//         if (secondNumber !== 0) {
//             result = firstNumber % secondNumber;
//             document.write(result)
//         } else {
//             document.write("Cannot find the modulus with zero.");
//         }
//     } else {
//         document.write("Invalid operation. Please enter +, -, *, /, or %.");
//     }
// }



// chapter 12-13


// var input = prompt("Enter character");
// var charCode = input.charCodeAt(0);
// if (charCode >= 48 && charCode <= 57) {
//     document.write("You entered a number")
// }

// else if (charCode >= 65 && charCode <= 90) {
//   document.write("you entered letter in uppercase")
// }

// else if (charCode >= 97 && charCode <= 122) {
//     document.write("you entered letter in lowercase")
// }

// else {
//   document.write("entered value is not a number or character")
// }




// var firstInteger = +prompt("Enter the first integer:"); 
// var secondInteger = +prompt("Enter the second integer:");
// if(firstInteger > secondInteger ){
//     document.write(firstInteger + " is larger")
// }
// else if(firstInteger < secondInteger ){
//     document.write(secondInteger + " is larger")
// }
// else{
//     document.write("both numbers are equal")
// }



// var number = +prompt("Enter an integer value");
// if (number > 0) {
//     document.write("The entered value is positive integer")
// } else if (number < 0) {
//     document.write("The entered value is negative integer")
// } else {
//    document.write("The entered value is zero")
// }



// var input = prompt("Enter character");
// var charCode = input.charCodeAt(0);
// if(charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122 ){
//     if(input === "a" || input === "e" || input === "i" || input === "o" || input === "u" ){
//         document.write("true")
//     }
//     else{
//         document.write("false")
//     }
// }
// else if (charCode >= 48 && charCode <= 57) {
//         document.write("you entered a number")
//     }
//     else{
//         document.write("invalid value")
//     }




// var correctPassword = "abcdefg";

// // Step b: Ask user to enter his/her password
// var enteredPassword = prompt("Enter your password:");

// // Step c: Validate the two passwords
// if (!enteredPassword) {
//     // Step c.i: Check if the user has entered a password
//     document.write("Please enter your password.");
// } else if (enteredPassword === correctPassword) {
//     // Step c.ii: Check if both passwords are the same
//     document.write("Correct! The password you entered matches the original password.");
// } else {
//     document.write("Incorrect password.");
// }




// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// document.write(greeting);
// }
// else{
// greeting = "Good evening";
// document.write(greeting);
// }



var timeInput = prompt("Enter time in 24hour format");
if(timeInput >= "0000" && timeInput < 1200){
    document.write("Good Morning")
}
else if(timeInput >= 1200 && timeInput < 1700){
    document.write("Good afternoon")
}
else if(timeInput >= 1700 && timeInput < 2100){
    document.write("Good evening")
}
else if(timeInput >= 2100 && timeInput < 2359){
    document.write("Good night")
}