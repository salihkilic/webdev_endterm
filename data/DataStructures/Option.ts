type Option<T> = 
    | { kind: "none" }
    | { kind: "some"; value: T };

// Function to create a "none" option
const none = <T>(): Option<T> => ({ kind: "none" });

// Function to create a "some" option
const some = <T>(value: T): Option<T> => ({ kind: "some", value: value });

// Function to handle an Option
const handleOption = <T>(option: Option<T>, onNone: () => void, onSome: (value: T) => void): void => {
    if (option.kind === "none") {
        onNone();
    } else {
        onSome(option.value);
    }
};

// Example usage
const option1: Option<number> = some(42);
const option2: Option<number> = none();

handleOption(option1, 
    () => console.log("No value"), 
    (value) => console.log(`Value is ${value}`)); // Output: Value is 42

handleOption(option2, 
    () => console.log("No value"), 
    (value) => console.log(`Value is ${value}`)); // Output: No value