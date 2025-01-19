// ---------------------------------------------------------------------------------------
// Closures in Lambdas
// ---------------------------------------------------------------------------------------

// Basic Closure
// A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
const createCounter = () => {
    let count = 0;
    return () => {
        count++;
        return count;
    };
};

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

// Closure with Parameters
// A closure can also capture parameters from its lexical scope.
const createAdder = (x: number) => {
    return (y: number) => {
        return x + y;
    };
};

const addFive = createAdder(5);
console.log(addFive(10)); // Output: 15

// Closure in a Loop
// Using closures inside loops to capture the current state of a variable.
const createFunctions = () => {
    let funcs = [];
    for (let i = 0; i < 5; i++) {
        funcs.push(() => console.log(i));
    }
    return funcs;
};

const functions = createFunctions();
functions.forEach(func => func()); // Output: 0 1 2 3 4

// Closure with setTimeout
// Using closures with setTimeout to capture the current state of a variable.
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(`Timeout: ${i}`);
    }, 1000);
}
// Output after 1 second: Timeout: 0, Timeout: 1, Timeout: 2, Timeout: 3, Timeout: 4

// ---------------------------------------------------------------------------------------