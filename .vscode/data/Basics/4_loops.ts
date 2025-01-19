// ---------------------------------------------------------------------------------------
// Loops
// ---------------------------------------------------------------------------------------

// For Loop
// Used when the number of iterations is known.
for (let i = 0; i < 5; i++) {
    console.log(`For Loop iteration: ${i}`);
}

// While Loop
// Used when the number of iterations is not known and depends on a condition.
let count = 0;
while (count < 5) {
    console.log(`While Loop iteration: ${count}`);
    count++;
}

// Do-While Loop
// Similar to the while loop, but the block of code is executed at least once.
let doCount = 0;
do {
    console.log(`Do-While Loop iteration: ${doCount}`);
    doCount++;
} while (doCount < 5);

// For-Of Loop
// Used to iterate over iterable objects (like arrays).
let array = [1, 2, 3, 4, 5];
for (let value of array) {
    console.log(`For-Of Loop value: ${value}`);
}

// Break Statement
// Used to exit a loop prematurely.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(`Break Statement iteration: ${i}`);
}

// Continue Statement
// Used to skip the current iteration and continue with the next one.
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(`Continue Statement iteration: ${i}`);
}

// ---------------------------------------------------------------------------------------