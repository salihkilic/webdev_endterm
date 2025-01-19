// ---------------------------------------------------------------------------------------
// Lambdas (Arrow Functions)
// ---------------------------------------------------------------------------------------

// Basic Arrow Function
// A simple arrow function that takes two numbers and returns their sum.
const lambda_add = (a: number, b: number): number => {
    return a + b;
};

// Arrow Function with Implicit Return
// If the function body contains only a single expression, you can omit the curly braces and the return keyword.
const lambda_multiply = (a: number, b: number): number => a * b;

// Arrow Function without Parameters
// An arrow function that takes no parameters and returns a string.
const lambda_greet = (): string => "Hello, World!";

// Arrow Function with a Single Parameter
// If there is only one parameter, you can omit the parentheses.
const lambda_square = x => x * x;

// Arrow Function as a Callback
// Arrow functions are often used as callbacks for array methods like map, filter, and reduce.
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(n => n * n);
console.log(squares); // Output: [1, 4, 9, 16, 25]

// Arrow Function with Rest Parameters
// An arrow function that takes any number of arguments and returns their sum.
const lambda_sum = (...numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};

// Arrow Function with Default Parameters
// An arrow function that takes two parameters, with the second parameter having a default value.
const lambda_subtract = (a: number, b: number = 5): number => a - b;

// Arrow Function Returning an Object
// When returning an object, wrap the object in parentheses to avoid syntax errors.
const lambda_createPerson = (name: string, age: number) => ({
    name: name,
    age: age
});
console.log(lambda_createPerson("John", 30)); // Output: { name: 'John', age: 30 }

// Arrow Function and 'this' Context
// Arrow functions do not have their own 'this' context. They inherit 'this' from the enclosing scope.
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    // Arrow function
    greetArrow() {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`); // 'this' refers to the instance of Person
        }, 1000);
    }
}

let person = new Person("Alice");
person.greetArrow();   // Output: Hello, my name is Alice

// ---------------------------------------------------------------------------------------