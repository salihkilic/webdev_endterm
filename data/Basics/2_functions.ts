
// ---------------------------------------------------------------------------------------
// Functions
// ---------------------------------------------------------------------------------------

// Basic Function
// A simple function that takes two numbers and returns their sum.
function add(a: number, b: number): number {
    return a + b;
}

// Function with Optional Parameters
// The second parameter is optional. If not provided, it defaults to 10.
function multiply(a: number, b?: number): number {
    return a * (b ?? 10);
}

// Function with Default Parameters
// The second parameter has a default value of 5.
function subtract(a: number, b: number = 5): number {
    return a - b;
}

// Function with Rest Parameters
// This function takes any number of arguments and returns their sum.
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Anonymous Function
// A function without a name, assigned to a variable.
const divide = function(a: number, b: number): number {
    return a / b;
};

// Arrow Function
// A shorter syntax for writing functions.
const square = (x: number): number => x * x;

// Function Overloading
// Multiple function signatures for the same function.
function greet(name: string): string;
function greet(name: string, age: number): string;
function greet(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age} years old.`;
    } else {
        return `Helslo, ${name}.`;
    }
}
