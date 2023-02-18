const deadpool = {
    name: 'Wade',
    surname: 'Winston',
    power: 'Regeneracion',
    // age: 50
    getName() {
        return `${this.name} ${this.surname} ${this.power}`
    }
}

// const name = deadpool.name;
// const surname = deadpool.surname;
// const power = deadpool.power;

function printHero({ name, surname, power, age }) {
    name = 'Fernando';
    console.log(name, surname, power, age);
}

printHero(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
const [ , , h3 ] = heroes;

console.log(h3);