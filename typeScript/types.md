## Common types:

primitive types: Number, String, Boolean,
Null, Undefined, Void, Object, Array, Tuples
Any (NEVER USE THIS - makes your TS codemore vulnerable to JS, defeats the purpose of using TS), Never and Unknown

## Define type and Declare variable

`let variableName: type = someValue`

## IMPORTANT - READ

`number` type is for numbers like 42. JS does have any special runtime value for integers and floats, and that's why there is no distinction in TS as well. Everything is simply a number.

## Type Inference

TS is smart enough to understand from
`let userId = 33444` that userId is a number, you don't really have to specify `let userId: number = 33444`. TS infers the type through the value.

## any type

- This TS special type is used whenever you don't want a particular variable to cause any typechecking error (rarely needed, better to avoid). It is used to turn off the type checking.
- You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.
- Inferred types as `any` with functions is a problem. It is better to mention types explicitly.

- In case of functions, make sure you are not only declaring the types for arguments, but also declaring the type of the return value

## void type

- Sometimes some functions might not return anything, but take some actions (functions within a function or just a log on console), in that case, the best practice would be to add `void` as return type from function

## never type

- There are certain functions which may never return a value. In that case use `never`. This can be intentional crash that we do in the code by throwing an error (through error boundaries)

## union type

- Functions can sometimes return two different types of data

  ```
  const eligibleToVote = (age: number): <string | boolean> => {
      if (age >= 18) {
          return true
      }
      return "you should be 18 or higher to vote"
  }
  ```

  So the return value here can be either string or boolean.

- you can have all strings or all numbers in an array with the following syntax

  ```
    const myNumbers: string[] | number[] = ['one', 'two', 'six']
  ```

  OR

  if you want a combination of numbers and strings together in an array then put string and number type in brackets/parantheses and add [] at the end -

  ```
    const myNumbers: (string | number)[] = [1, 'two', 'six']
  ```

  ## Actual literal assignments are also possible

  ```
  let pi: 3.14159 = 3.14159;
  ```

  In this case, you can't modify the value of variable pi even if it is declared using let.
  - Another example would be -

  ```
  let seatType: 'aisle' | 'middle' | 'window'
  seatType = 'middle'
  const mySeatType: seatType = 'aisle';
  ```

  I can't write -

  ```
    const mySeatType: seatType = 'some random seat';
  ```
