const iterableMap = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (const [key, value] of iterableMap) {
  console.log(`${key} = ${value}`);
}

const iterableSet = new Set([1, 2, 3, 4, 5]);

for (const element of iterableSet) {
  console.log(element);
}

// Example 1: Iterating over an array
const iterableArray = [10, 20, 30];

for (const element of iterableArray) {
  console.log(element);
}

// Example 2: Iterating over a string
const iterableString = 'Hello';

for (const char of iterableString) {
  console.log(char);
}

// Example object
const person = {
  name: 'John',
  age: 30,
  occupation: 'Developer'
};

// Iterating over the properties of an object
for (const property in person) {
  if (person.hasOwnProperty(property)) {
    console.log(`${property}: ${person[property]}`);
  }
}

class Person {
  name = '23MX';
  age = '22';
  //console.log(this.name, this.age);

}
const obj1 = new Person;
console.log(obj1.name, obj1.age);
