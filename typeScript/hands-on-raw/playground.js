// let user = { name: "Nikita", age: "16" };
const nikitaUser = {
    id: 1,
    email: "nikita@example.com",
    userId: 123,
    // someMethod: () => "Hello, Nikita",
};
const sutejUser = {
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
