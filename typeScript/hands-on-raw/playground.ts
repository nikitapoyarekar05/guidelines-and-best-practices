// let user = { name: "Nikita", age: "16" };

// console.log(user.name);
// console.log(user.age);

// enum SeatChoice {
//   AISLE,
//   MIDDLE = 17,
//   WINDOW,
// }

// const myAisleSeat = SeatChoice.AISLE;
// const myMiddleSeat = SeatChoice.MIDDLE;
// const myWindowSeat = SeatChoice.WINDOW;

// console.log(myAisleSeat);
// console.log(myMiddleSeat);
// console.log(myWindowSeat);

// enum RGB {
//   RED = "RED",
//   GREEN = "GREEN",
//   BLUE = "BLUE",
// }
// const redColor: RGB.RED = RGB.RED;
// console.log(redColor);

interface User {
  readonly id: number;
  email: string;
  userId: number;
  gId?: number;

  someMethod?(): string;
}

const nikitaUser: User = {
  id: 1,
  email: "nikita@example.com",
  userId: 123,

  // someMethod: () => "Hello, Nikita",
};

const sutejUser: User = {
  id: 1,
  email: "nikita@example.com",
  userId: 123,

  someMethod: () => "Hello, Sutej",
};

nikitaUser.email = "newemail@example.com";
// nikitaUser.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

console.log(nikitaUser);
console.log(nikitaUser.someMethod?.());
console.log(sutejUser);
console.log(sutejUser.someMethod?.());

export {};
