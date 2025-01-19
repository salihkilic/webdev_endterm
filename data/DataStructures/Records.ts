interface Gun {
    name: string;
    penetration: number;
    damage: number;
}

const createGun = (name: string, penetration: number, damage: number): Gun => ({
    name: name,
    penetration: penetration,
    damage: damage
});

interface Tank {
    name: string;
    weapon: Gun;
    armor: number;
    health: number;
    shoot: (this: Tank, tank: Tank) => Tank;
}

const createTank = (name: string, weapon: Gun, armor: number, health: number): Tank => ({
    name: name,
    weapon: weapon,
    armor: armor,
    health: health,
    shoot: function (this: Tank, tank: Tank): Tank {
        if (this.weapon.penetration > tank.armor) {
            const updatedHealth = tank.health - this.weapon.damage;
            console.log(`${this.name} shoots ${tank.name} causing ${this.weapon.damage} --> HEALTH: ${updatedHealth}`);
            return {
                ...tank,
                health: updatedHealth
            };
        } else {
            const updatedArmor = tank.armor - this.weapon.penetration;
            console.log(`${this.name} shoots ${tank.name} with ${this.weapon.name} reducing armour by ${this.weapon.penetration} --> ARMOUR: ${updatedArmor}`);
            return {
                ...tank,
                armor: updatedArmor
            };
        }
    }
});

// Example usage
const gun1 = createGun("Cannon", 100, 50);
const tank1 = createTank("Panzer", gun1, 200, 1000);
const tank2 = createTank("Tiger", gun1, 150, 800);

console.log(gun1); // Output: { name: 'Cannon', penetration: 100, damage: 50 }
console.log(tank1); // Output: { name: 'Panzer', weapon: { name: 'Cannon', penetration: 100, damage: 50 }, armor: 200, health: 1000 }

tank1.shoot(tank2); // Example of shooting