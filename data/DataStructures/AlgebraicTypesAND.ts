// Base types
interface Animal {
    name: string;
    age: number;
}

interface Mammal {
    hasFur: boolean;
}

interface Carnivore {
    diet: "meat";
}

// Intersection type
type Lion = Animal & Mammal & Carnivore & { roar: () => void };

// Function to create a Lion
const createLion = (name: string, age: number, hasFur: boolean): Lion => ({
    name: name,
    age: age,
    hasFur: hasFur,
    diet: "meat",
    roar: () => console.log("Roar!")
});

// Example usage
const lion1 = createLion("Simba", 5, true);

console.log(lion1); // Output: { name: 'Simba', age: 5, hasFur: true, diet: 'meat' }
lion1.roar(); // Output: Roar!