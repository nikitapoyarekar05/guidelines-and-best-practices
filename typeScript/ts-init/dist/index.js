// console.log("hello world!");
// Declaring classes
// class Aeroplane {
//   wings: number;
//   private engines: number;
//   seats: number;
//   company: string;
//   destination: string = "Dallas, TX";
//   private readonly _id: string = Math.random().toString(36).substr(2, 9);
//   constructor(wings: number, engines: number, seats: number, company: string) {
//     this.wings = wings;
//     this.engines = engines;
//     this.seats = seats;
//     this.company = company;
//   }
//   public getEngines(): number {
//     return this.engines;
//   }
//   public getId(): string {
//     return this._id;
//   }
// }
// const boeing = new Aeroplane(2, 2, 180, "Boeing");
// console.log(boeing);
// console.log("can we see id without getId?", boeing._id); // Error: Property '_id' is private and only accessible within class 'Aeroplane'.
// console.log("can we see id using getId?", boeing.getId());
// console.log(boeing.destination);
// boeing._id = 123; // Error: Cannot assign to '_id' because it is a read-only property.
console.log("-----");
class Aeroplane {
    wings;
    engines;
    seats;
    company;
    // JS doesn't understand the private keyword. TS code is transpiled to JS and private label is removed. That's why add # to declare private variable
    #_id = Math.random().toString(36).substr(2, 9);
    constructor(wings, engines, seats, company) {
        this.wings = wings;
        this.engines = engines;
        this.seats = seats;
        this.company = company;
        this.wings = wings;
        this.engines = engines;
        this.seats = seats;
        this.company = company;
    }
    getEngines() {
        return this.engines;
    }
    getId() {
        return this.#_id;
    }
    getSeats() {
        return this.seats;
    }
    setSeats(seats) {
        this.seats = seats;
    }
}
// Createing an instance of Aeroplane with 2 wings, 2 engines, 200 seats for "Airbus" company
const airbus = new Aeroplane(2, 2, 200, "Airbus");
// console.log(airbus);
// console.log("ID:", airbus._id); //returns error as _id is private and only accessible within class 'Aeroplane'
console.log("ID using getId():", airbus.getId());
// Setting _id is not allowed as it is a private readonly property
// airbus.#_id = "newId"; // Error: Cannot assign to '#_id' because it is a read-only property.
// airbus.setId("newId");
// console.log("ID after setId():", airbus.getId());
console.log("Seats using getSeats():", airbus.getSeats());
airbus.setSeats(250);
console.log("Seats after setSeats():", airbus.getSeats());
export {};
