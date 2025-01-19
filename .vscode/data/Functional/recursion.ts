// Factorial function
function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Fibonacci function
function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Sum of an array
function sumArray(arr: number[], index: number = 0): number {
    if (index >= arr.length) return 0;
    return arr[index] + sumArray(arr, index + 1);
}

// Reverse a string
function reverseString(str: string): string {
    if (str === "") return "";
    return reverseString(str.substr(1)) + str.charAt(0);
}

// Find the greatest common divisor (GCD)
function gcd(a: number, b: number): number {
    if (b === 0) return a;
    return gcd(b, a % b);
}

// Example usages
console.log(factorial(5)); // Output: 120
console.log(fibonacci(6)); // Output: 8
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(reverseString("hello")); // Output: "olleh"
console.log(gcd(48, 18)); // Output: 6