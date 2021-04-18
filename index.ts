let num: number = 29;
const string: string = 'Hello';
var object: object = {};

function sum(num1: number, num2: number) {
    return num1 + num2;
}

class Car {
    // fields  
    model: String;
    doors: Number;
    isElectric: Boolean;

    constructor(model: String, doors: Number, isElectric: Boolean) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    displayMake(): void {
        console.log(`This car is ${this.model}`);
    }
}

interface ICar {  
    model: String,  
    make: String,  
    display(): void  
}

let car1: ICar = {
    model: 'Tesla',
    make: 'Toyota',
    display: () => {
        console.log('Hi');
    }
}