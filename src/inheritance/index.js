// The base class.
class Color{
    #color; // private property prefix with #
    constructor(color){
        this.#color = color;
    }
    intro(){
        console.log(`I am ${this.#color} in color.`);
    }
}

class Shape extends Color{
    #shape;
    constructor(color, shape){
        super(color); // Call the parent constructor
        this.#shape = shape;
    }
    intro(){
        super.intro(); // Call the "intro" method from parent class.
        console.log(`I am ${this.#shape}.`);
    }
}

const redCircle = new Shape("red", "circle");
redCircle.intro();