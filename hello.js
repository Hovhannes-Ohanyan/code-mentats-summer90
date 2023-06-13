
/*
1)

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['i', 'j', 'k'];
const array4 = array1.concat(array2,array3);
console.log(array4);


*concat function in JavaScript is used to merge two or more arrays together, creating a new array that contains the elements of the concatenated arrays.
concat(value0, value1, * … ,* valueN)

*/

/*

2)

const array = [10, 20, 30, 40, 50];
const result = array.every((element) => element > 0);
console.log(result);
  

*The every() method returns a boolean value: true if the callback function returns true for all elements, and false if the callback function returns false for at least one element.

*/


/*

3)

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);



*The Array.prototype.filter() method in JavaScript creates a new array with all elements that pass a test implemented by a provided function

*/


/*

4)

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
  Expected output: Array [0, 1, 2, Array [3, 4]]


*The flat() function in JavaScript is an array method that is used to flatten a nested array by concatenating all subarrays into a single-level array.

*/


/*

5)

const array = [1, 2, 3, 4, 5];

array.forEach((element) => {
  console.log(element);
});

output:1 2 3 4 5


*The forEach() method in JavaScript is used to iterate over the elements of an array and execute a provided callback function for each element

*/

/*

6)

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));

// Expected output: 4
console.log(beasts.indexOf('giraffe'));
// Expected output: -1

*The indexOf() method in JavaScript is used to find the index of the first occurrence of a specified element within an array


*/


/*

7)

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// Expected output: 1

*The lastIndexOf() method in JavaScript is similar to the indexOf() method, but it searches for the last occurrence of a specified element within an array. 


*/



/*

8)


const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

*/


/*

9)

const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

Output: 15


*The reduce() method in JavaScript is used to iterate over the elements of an array and accumulate a single value by applying a callback function to each element. It reduces the array to a single value.

*/


/*

10)

const array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array);
 // Output: [5, 4, 3, 2, 1]


const array = [1, 'two', { key: 'value' }, [4, 5]];
array.reverse();

console.log(array);
 // Output: [[4, 5], { key: 'value' }, 'two', 1]


*The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

*/


/*

11)

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

*The slice() method in JavaScript is used to create a shallow copy of a portion of an array into a new array. It does not modify the original array.

*/

/*

12)

const array = [1, 2, 3, 4, 5];
const hasEvenNumber = array.some((element) => {
  return element % 2 === 0;
});

console.log(hasEvenNumber); 
// Output: true


*The some() method in JavaScript is used to check if at least one element in an array satisfies a specified condition. It returns true if any element satisfies the condition, otherwise it returns false.

*/


/*

13)

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

*The sort() method in JavaScript is used to sort the elements of an array in place, meaning it modifies the original array.

*/

/*

14)

const array = [1, 2, 3, 4, 5];
const removedElements = array.splice(2, 2);

console.log(array); // Output: [1, 2, 5]
console.log(removedElements); // Output: [3, 4]

const array = [1, 2, 3, 4, 5];
array.splice(2, 0, 'a', 'b');

console.log(array); // Output: [1, 2, 'a', 'b', 3, 4, 5]


*splice(start, deleteCount, item1, item2, itemN)
*The splice() method in JavaScript is used to modify an array by adding or removing elements. It can be used to add elements at a specific index, remove elements from a specific index, or replace elements within an array.


*/


/*

15)


const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]

*
The entries() method is used to create an iterator object for an array. 

*/


/*

16)

const array = [1, 2, 3, 4, 5];
array.fill(0);

console.log(array);
 // Output: [0, 0, 0, 0, 0]

const array = [1, 2, 3, 4, 5];
array.fill('a', 1, 4);

console.log(array); // Output: [1, 'a', 'a', 'a', 5]



*fill(value, start, end)
*The fill() method in JavaScript is used to fill all the elements of an array with a static value. It modifies the original array and returns the modified array.

*/

/*

17)

const array = [1, 2, 3, 4, 5];
const foundElement = array.find((element) => element > 3);

console.log(foundElement); // Output: 4

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const user = users.find((user) => user.id === 2);

console.log(user); 
// Output: { id: 2, name: 'Bob' }

*The find() method in JavaScript is used to return the first element in an array that satisfies a given condition.


*/

/*

18)

const array = [10, 20, 30, 40, 50];
const index = array.findIndex((element) => element > 30);
console.log(index);

// Output: 3

const fruits = ['apple', 'banana', 'cherry', 'date'];

const index = fruits.findIndex((fruit) => fruit === 'cherry');

console.log(index);

 // Output: 2

*The findIndex() method in JavaScript is similar to the find() method, but instead of returning the element itself, it returns the index of the first element in an array that satisfies a given condition

*/

/*

19)
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Alice' }
];
const targetName = 'Alice';

const lastIndex = users.findLastIndex((user) => user.name === targetName);

console.log(lastIndex);

 // Output: 3

const array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
const target = 4;

const lastIndex = array.findLastIndex((element) => element === target);

console.log(lastIndex);

 // Output: 5


*The findLastIndex() method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function.

*/

/*

20)

const array = [1, 2, 3, 4, 5];

console.log(array.includes(3)); // Output: true
console.log(array.includes(6)); // Output: false

const array = ['apple', 'banana', 'cherry', 'date'];

console.log(array.includes('cherry', 2)); // Output: true
console.log(array.includes('apple', 2)); // Output: false

*The Array.prototype.includes() method is a built-in JavaScript method that checks if an array includes a certain element and returns true or false accordingly

*/

/*

21)
const array = ['apple', 'banana', 'cherry'];

const result = array.join(', ');

console.log(result);

 // Output: "apple, banana, cherry"


const array = [1, 2, 3, 4, 5];

const result = array.join(' - ');

console.log(result);

 // Output: "1 - 2 - 3 - 4 - 5"


*The Array.prototype.join() method is a built-in JavaScript method that combines the elements of an array into a string.

*/

/*

22)

const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6));

 // [1, 2, 6, 4, 5]


console.log(arr); 

// [1, 2, 3, 4, 5]


const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6).map((x) => x ** 2)); 

// [1, 4, 36, 16, 25]


*The with() method changes the value of a given index in the array, returning a new array with the element at the given index replaced with the given value

*/
