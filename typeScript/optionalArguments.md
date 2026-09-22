## optional arguments

- Marked using an optional character ?, but you can specify the type for this beforehand so that in case the value is provided, we can still type check it against the specified type

  ```
    type User : {
        name: string;
        email: string;
        age: number;
        goesToGym?: boolean;
  }
  ```

- you can combine types using `&`

- For array type, you can define any variable as:

  ```
    const cities: string[] = [];
    cities.push('Austin')
  '''

    OR
  '''
    const myCities: Array<string> = [];
    myCities.push('Austin')
  ```

  Custom array types also exist.

  ```
    type User: {
        name: string;
        age: number;
    }

    const myUsers: User[] = [];
    myUsers.push({name: 'Nikita', age: 18})
  ```
