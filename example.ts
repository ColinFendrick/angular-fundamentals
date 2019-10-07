const getName: Function = () => console.log('Hey')
let players: string[] = ['ronaldo', 'messi']
let myName: string = 'boasdk'

function getPlayerName(name: string, surname: string) {
  return `${name} ${surname}`
}

class Person {
  public hobby: string;
  static numOfPersons: number = 0;
  constructor(private name: string, private age: number) {
    Person.numOfPersons++;
  }

  info() {
    console.log(`${this.name} ${this.age}`)
  }
}

class Player extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }
}
const ronaldo = new Player('Ronaldo', 32)

interface PersonInterface {
  name: string;
  age: number;
}

interface Vehicle {
  drive(): any;
}

class Car implements Vehicle {
  drive(): void {
    console.log('driving a car')
  }
}

class Bicycle implements Vehicle {
  drive(): void {
    console.log('Riding a bike')
  }
}

const car = new Car()
const bike = new Bicycle()
console.log(bike.drive())

const getType = function<T>(value: T): string {
  return typeof(value)
}

console.log(getType(false))
console.log(getType(3.1341341342))

function driveVehicle<vehicle extends Vehicle>(v: Vehicle): void {
  v.drive()
}

driveVehicle(car)
driveVehicle(bike)
