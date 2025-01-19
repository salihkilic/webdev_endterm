// Base types
interface Bird {
    kind: string;
    canFly: boolean;
}

interface Fish {
    kind: string;
    canSwim: boolean;
}

// Union type
type Pet = Bird | Fish;

// Function to create a Bird
const createBird = (kind: string, canFly: boolean): Bird => ({
    kind: kind,
    canFly: canFly
});

// Function to create a Fish
const createFish = (name: string, canSwim: boolean): Fish => ({
    kind: name,
    canSwim: canSwim
});

// Function to describe a Pet
const describePet = (pet: Pet): string => {
    if ('canFly' in pet) {
        return `${pet.kind} is a bird and it ${pet.canFly ? "can" : "cannot"} fly.`;
    } else {
        return `${pet.kind} is a fish and it ${pet.canSwim ? "can" : "cannot"} swim.`;
    }
};

// Example usage
const bird1 = createBird("Parrot", true);
const fish1 = createFish("Goldfish", true);

console.log(describePet(bird1)); // Output: Parrot is a bird and it can fly.
console.log(describePet(fish1)); // Output: Goldfish is a fish and it can swim.