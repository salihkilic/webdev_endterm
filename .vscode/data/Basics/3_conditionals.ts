// ---------------------------------------------------------------------------------------
// Conditionals
// ---------------------------------------------------------------------------------------

// If Statement
// Executes a block of code if the condition is true.
let num = 10;
if (num > 5) {
    console.log("Number is greater than 5");
}

// If-Else Statement
// Executes one block of code if the condition is true, otherwise executes another block.
if (num > 15) {
    console.log("Number is greater than 15");
} else {
    console.log("Number is 15 or less");
}

// If-Else If-Else Statement
// Checks multiple conditions, executing the corresponding block for the first true condition.
if (num > 20) {
    console.log("Number is greater than 20");
} else if (num > 10) {
    console.log("Number is greater than 10 but 20 or less");
} else {
    console.log("Number is 10 or less");
}

// Ternary Operator
// A shorthand for if-else statements. Returns one of two values based on a condition.
let result = num > 5 ? "Greater than 5" : "5 or less";
console.log(result);

// Switch Statement
// Executes a block of code based on the value of a variable or expression.
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Logical AND (&&)
// Executes a block of code if both conditions are true.
if (num > 5 && num < 15) {
    console.log("Number is between 5 and 15");
}

// Logical OR (||)
// Executes a block of code if at least one of the conditions is true.
if (num < 5 || num > 15) {
    console.log("Number is either less than 5 or greater than 15");
}

// Logical NOT (!)
// Executes a block of code if the condition is false.
if (!(num > 15)) {
    console.log("Number is not greater than 15");
}