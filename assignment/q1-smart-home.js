/*
    Create a function "createSignalFactory" that returns an object with function "send()". The implementation of "send()" function should
    go according to the device type declared in the only argument.
    You can use easily create this with object literals and functions. If you have succeeded this approach, you are being challenged to 
    improve the code by:
    - Create a "BaseSignal" class to be inherited by "TVSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - In the children classes, override "send()" function with implementation specfic to its type.
    - Through the function "createSignalFactory", instantiate an object using the "new" keyword.
*/

// Add code here

let signal = createSignalFactory('tv');
signal.send(); // "Send tv signal"

signal = createSignalFactory('aircon');
signal.send(); // "Send aircon signal"

signal = createSignalFactory('door');
signal.send(); // "Send door signal"