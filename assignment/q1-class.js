/*
    Task:
    - Instantiate an object by the name "car" using the new keyword.
    - Call the drive() method of "car" instance.
*/

class Vehicle {

    // Private properties (Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
    #driverName = null;

    // For object instantiation use (Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
    constructor(driverName){
        this.#driverName = driverName;
    }

    drive(){
        console.log(`The vehicle is driven by ${this.#driverName}`);
    }
}

// Add code here
const car = new Vehicle("Edison");
car.drive();