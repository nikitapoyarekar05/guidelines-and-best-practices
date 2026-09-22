## ENUMS

- Used when you have well decided set of options

```
enum SeatChoice {
  AISLE,
  MIDDLE = 17,
  WINDOW,
}

const myAisleSeat = SeatChoice.AISLE;
const myMiddleSeat = SeatChoice.MIDDLE;
const myWindowSeat = SeatChoice.WINDOW;

console.log(myAisleSeat);
console.log(myMiddleSeat);
console.log(myWindowSeat);
```

- Use this when you upfront know all options

- By default, the first choice is always 0, but you can confugure it by your own choice. Just remember that subsequent option value will be incremented by 1
  ex. SeatChoice.AISLE = 0, but SeatChoice.MIDDLE = 17 (we set that), and SeatChoice.WINDOW = 18 (incremented by 1 as it follows SeatChoice.MIDDLE)

- The best use case would be to to send this as a data to the Database. Ex.

```
enum RGB {
  RED = "RED",
  GREEN = "GREEN",
  BLUE = "BLUE",
}
const redColor: RGB.RED = RGB.RED;
console.log(redColor);
```
