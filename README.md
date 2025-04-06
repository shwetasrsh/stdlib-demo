# stdlib - A standard library for javascript and node.js

This tutorial demonstrates how to use stdlib - the standard library for JavaScript and Node.js — by building a simple table with data of different types and performing aggregate operations on the data.

## Use Case

Given a list containing details of students, we will construct a table which contains details of students and perform aggregate functions on the data.

## Steps 

1. Install the stdlib library -

```bash
$ npm install @stdlib/stdlib
```


2. Create a new file - demo.js


3. Import stdlib modules -
```javascript
var tabulate = require('@stdlib/utils/tabulate');
var countBy = require('@stdlib/utils/count-by');
var groupBy = require('@stdlib/utils/group-by');
```

4. Define the array -
```javascript
var people = [
{ name: 'Anand', age: 25, country: 'India' },
{ name: 'Bob', age: 24, country: 'Canada' },
{ name: 'Anita', age: 25, country: 'India' },
{ name: 'David', age: 26, country: 'UK' },
{ name: 'Eve', age: 24, country: 'Canada' },
{ name: 'Frank', age: 30, country: 'UK' },
];
```

5. Construct a frequency table -
```javascript
var table = tabulate(people);

/* returns [
  [
    { name: 'Anand', age: 25, country: 'India' },
    1,
    0.16666666666666666
  ],
  [
    { name: 'Bob', age: 32, country: 'Canada' },
    1,
    0.16666666666666666
  ],
  [
    { name: 'Anita', age: 25, country: 'India' },
    1,
    0.16666666666666666
  ],
  [ { name: 'David', age: 40, country: 'UK' }, 1, 0.16666666666666666 ],
  [
    { name: 'Eve', age: 32, country: 'Canada' },
    1,
    0.16666666666666666
  ],
  [ { name: 'Frank', age: 40, country: 'UK' }, 1, 0.16666666666666666 ]
] */
```

6. Count the age of people -
```javascript
var ageCounts = countBy(people, person => person.age);

/* returns { '25': 2, '32': 2, '40': 2 } */
```

7. Group the people by the country -
```javascript
var groupedByCountry = groupBy(people, person => person.country);

/* returns {
  India: [
    { name: 'Anand', age: 25, country: 'India' },
    { name: 'Anita', age: 25, country: 'India' }
  ],
  Canada: [
    { name: 'Bob', age: 32, country: 'Canada' },
    { name: 'Eve', age: 32, country: 'Canada' }
  ],
  UK: [
    { name: 'David', age: 40, country: 'UK' },
    { name: 'Frank', age: 40, country: 'UK' }
  ]
} */
```

8. Run your file -
```node
node demo.js
```


------
## Command Line Utility

In case you want to run as command-line utility then run -

```bash
stdlib repl
```

Run the given commands in the command line in the same order.
