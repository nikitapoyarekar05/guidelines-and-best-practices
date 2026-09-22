## Interface

- Declared as

```
interface User {
    readonly id: number;
    email: string;
    userId: number;
    gId?: number;
}
```

## Inteface vs Type

Imagine you are building a video game, and you need to tell the computer the rules for what things look like. Both interface and type are just ways to write down those rules.

### Interface

- It is a LEGO Instruction Manual. It is used when you are building a specific "thing" (an object) with parts.

- Imagine you write an instruction manual called Aeroplane. It says every aeroplane MUST have 2 wings, 1 engine and 50 basic economy seats.
  - Adding on: If you want to build an Delta plane, you just take the original manual and say, "Use the Aeroplane manual, but add brand color"
  - Sneaky trick: If you write a second manual later on and also name it Aeroplane, the computer just staples the two manuals together into one big set of instructions.

### Types

- It is a Custom Rule Label. It can also be a manual for a Aeroplane, but it’s really a super-label for any rule you want to invent.

- Sometimes you don't want to build a whole Aeroplane; you just want to set a simple rule.

- Making choices: You can use a type to say, "There are only 2 types of classes: Economy and First'." An interface cannot do this!
  or
  if I say twinJet = "airbus 340" | "airbus 380" | "boeing 747"

- Nicknames: You can use a type to say, "Whenever I say SeatType, I just mean a regular seats."

### The Short Version

Use an interface when you are making a blueprint for a character, a vehicle, or an item in your game. It’s perfect for adding more pieces later.

Use a type when you want to make a list of choices (like "Easy" | "Medium" | "Hard") or give a quick nickname to a simple rule.

## Main difference between interface and type in TypeScript

- Both interface and type define the shape of data, but they differ in scope and extendability:

- Capabilities: type can define aliases for primitives, union types ("A" | "B"), and tuples, whereas interface is strictly limited to object and function shapes.

- Extension: interface extends other interfaces using the extends keyword, while type combines shapes using intersections (&).

- Declaration Merging: interface supports auto-merging when declared multiple times in the same scope, which makes it ideal for public APIs and library declarations. type will throw a duplicate identifier error if redefined.

- Rule of thumb: Use type for everyday application code where flexibility with unions and primitives is needed. Use interface when defining object shapes for public-facing SDKs, libraries, or base models meant to be extended by consumer code.
