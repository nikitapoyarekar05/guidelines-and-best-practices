## Tuples

- used when the order in which the values are sent matter. Best example would be RGB values.

```
type RGB: [number number, number];    <--- this is how you define a tuple type

let myColors: RGB = [234, 123, 678];
```

what this says is that red, green blue are numbers (can be an integer or floating point).

Even if you want to add let's see a 4th number for opacity, you can't add - as it is not allowed.

I can also update this tuple as `myColors[0] = 000` but I can't do `myColors[0] = 'Nikita'` as string is not allowed.

- _One catch here:_ since tuple is an array, I can use all array methods(shift, unshift, push, pop) on this one and I can simply do `myColors.push('Austin')`.
  That's why you need to be extra cautious when using TUPLES in TypeScript.
