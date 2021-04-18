var num = 29;
var string = 'Hello';
var object = {};
function sum(num1, num2) {
    return num1 + num2;
}
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("This car is " + this.model);
    };
    return Car;
}());
var car1 = {
    model: 'Tesla',
    make: 'Toyota',
    display: function () {
        console.log('Hi');
    }
};
