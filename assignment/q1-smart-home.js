/*
    Task
    - Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
    - In the respective child classes, call `super()` with it's type.
*/
// Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
class BaseSignal {
  constructor(type) {
    // In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    if (this.constructor.name === "BaseSignal") {
      throw new Error("This class cannot be instantiated");
    }

    this.type = type;
  }

  // Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
  send() {
    console.log(`Sending ${this.type} signal`);
  }
}

class TvSignal extends BaseSignal {
  constructor() {
    // Call `super()` with the type.
    super("tv");
  }
}

class AirconSignal extends BaseSignal {
  constructor() {
    // Call `super()` with the type.
    super("aircon");
  }
}

class DoorSignal extends BaseSignal {
  constructor() {
    // Call `super()` with the type.
    super("door");
  }
}

const tv = new TvSignal();
tv.send(); // Prints "Sending tv signal".

const door = new DoorSignal();
door.send(); // Prints "Sending door signal".

const aircon = new AirconSignal();
aircon.send(); // Prints "Sending aircon signal".
