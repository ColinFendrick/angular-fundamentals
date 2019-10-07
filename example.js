const getName = () => console.log('Hey');
let players = ['ronaldo', 'messi'];
let myName = 'boasdk';
function getPlayerName(name, surname) {
    return `${name} ${surname}`;
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        Person.numOfPersons++;
    }
    info() {
        console.log(`${this.name} ${this.age}`);
    }
}
Person.numOfPersons = 0;
class Player extends Person {
    constructor(name, age) {
        super(name, age);
    }
}
const ronaldo = new Player('Ronaldo', 32);
class Car {
    drive() {
        console.log('driving a car');
    }
}
class Bicycle {
    drive() {
        console.log('Riding a bike');
    }
}
const car = new Car();
const bike = new Bicycle();
console.log(bike.drive());
const getType = function (value) {
    return typeof (value);
};
console.log(getType(false));
console.log(getType(3.1341341342));
function driveVehicle(v) {
    v.drive();
}
driveVehicle(car);
driveVehicle(bike);
