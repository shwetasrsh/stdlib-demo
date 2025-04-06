var tabulate = require('@stdlib/utils/tabulate');
var countBy = require('@stdlib/utils/count-by');
var groupBy = require('@stdlib/utils/group-by');

var people = [
    { name: 'Anand', age: 25, country: 'India' },
    { name: 'Bob', age: 32, country: 'Canada' },
    { name: 'Anita', age: 25, country: 'India' },
    { name: 'David', age: 40, country: 'UK' },
    { name: 'Eve', age: 32, country: 'Canada' },
    { name: 'Frank', age: 40, country: 'UK' },
  ];
  
var table = tabulate(people);

console.log(table);

var ageCount = countBy(people, person => person.age);

console.log(ageCount);

var groupedByCountry = groupBy(people, person => person.country);

console.log(groupedByCountry);
