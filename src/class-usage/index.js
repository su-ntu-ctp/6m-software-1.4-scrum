
/*
    As opposed to Object Literal, the usage of a class enforces the instantiated objects 
    with default properties (variables) and behaviours (functions/methods).
*/

class RegisteredPet {

    // The default properties 
    petType; // dog, cat, etcs
    regNo; // any alphanumeric value
    petName;

    constructor(petType, regNo, givenName){
        
        // Assign default values to the private properties
        this.petType = petType;
        this.regNo = regNo;
        this.petName = givenName;
    }

    // The default method/function
    report(){
        console.log(`Hi, my name is ${this.petName}. I am a ${this.petType}. My registered identity number is ${this.regNo}.`)
    }
}

const bobby = new RegisteredPet("dog", "A123Z", "Bobby");
bobby.report();

const kitty = new RegisteredPet("cat", "A456Z", "Kitty");
kitty.report();