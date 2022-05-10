/*
    Objective: baby.performTalent() should print "Talent from parent class" and "Talent from child class" in the console.

    Task:
    - Define a new class by the name "Child" and extends the Parent class.
    - Define a method in the Child class with the same method as the Parent class.
    - Use "super" keyword to call the Parent method within the Child method.
    - Console.log "Talent from child class" after the calling the Parent method.
*/

class Parent {

    // In the absence of constructor, a default empty constructor will be assumed by JavaScript Engine.
    // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor (search keyword "default constructor")

    performTalent(){
        console.log("Talent from parent class");
    }
}

// Add code here
class Child extends Parent {
    
    performTalent(){
        super.performTalent();
        console.log("Talent from child class");
    }
}

const baby = new Child();
baby.performTalent();

/*
    Expected Output:

    Talent from parent class
    Talent from child class
*/