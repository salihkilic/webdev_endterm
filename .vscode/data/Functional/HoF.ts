// A higher-order function that takes a function as an argument
const higherOrderFunction = (fn: (x: number) => number, value: number): number => {
    return fn(value);
};

// A simple function to be passed as an argument
const double = (x: number): number => {
    return x * 2;
};

// Using the higher-order function
const hofResult = higherOrderFunction(double, 5);
console.log(hofResult); // Output: 10

// A higher-order function that returns a function
const createMultiplier = (multiplier: number): ((x: number) => number) => {
    return (x: number): number => {
        return x * multiplier;
    };
};

// Using the higher-order function to create a new function
const triple = createMultiplier(3);
console.log(triple(5)); // Output: 15

// ------ Curried Function -------

// A curried function that adds two numbers
const addcurried = (a: number) => (b: number): number => {
    return a + b;
};

// Using the curried function
const addFivecurried = addcurried(5);
const curriedresult = addFivecurried(10);
console.log(curriedresult); // Output: 15

// ------ FILTER -------

// A higher-order function that filters an array based on a predicate function
const filterArray = <T>(arr: T[], predicate: (value: T) => boolean): T[] => {
    return arr.filter(predicate);
};

// A predicate function to filter out even numbers
const isEven = (num: number): boolean => {
    return num % 2 === 0;
};

// Using the higher-order function to filter an array
const mynumbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(mynumbers, isEven);
console.log(evenNumbers); // Output: [2, 4, 6]

// ------ MAP -------

// A higher-order function that maps over an array
const mapArray = <T, U>(arr: T[], callback: (value: T) => U): U[] => {
    return arr.map(callback);
};

// A callback function to double the numbers
const doubleValue = (num: number): number => {
    return num * 2;
};

// Using the higher-order function to map over an array
const mapnumbers = [1, 2, 3, 4, 5, 6];
const doubledNumbers = mapArray(mapnumbers, doubleValue);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10, 12]


// ------ FOLD -------

// A higher-order function that folds an array
const foldArray = <T, U>(arr: T[], initialValue: U, callback: (accumulator: U, value: T) => U): U => {
    return arr.reduce(callback, initialValue);
};

// A callback function to sum the numbers
const foldsum = (accumulator: number, num: number): number => {
    return accumulator + num;
};

// Using the higher-order function to fold an array
const sumnumbers = [1, 2, 3, 4, 5, 6];
const sumOfNumbers = foldArray(sumnumbers, 0, foldsum);
console.log(sumOfNumbers); // Output: 21