
//1
var arr1=[1,2,3];
var arr2=[4,5,6];
var arr3=[7,8,9];

function merge(arr1,arr2,arr3)
{
var arr=arr1.concat(arr2,arr3);
return arr;
}
console.log(merge(arr1,arr2,arr3));



// 3
const numbers1 = [5, 2, 8, 1, 9];
let largest = numbers1[0];

for (let i = 1; i < numbers1.length; i++) {
  if (numbers1[i] > largest) {
    largest = numbers1[i];
  }
}

console.log(largest);

//4 
const numbers = [1, 4, 2, 7, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [4, 2, 6]

//5
const names1 = ["Alice", "Bob", "Charlie"];
const joinedNames1= names1.join(", ");

console.log(joinedNames1); // Output: "Alice, Bob, Charlie"


//6
const names = ["Alice", "Bob", "Charlie"];
const joinedNames2 = names.join(", ");

console.log(joinedNames2); // Output: "Alice, Bob, Charlie"


// Maps
//1
const user = new Map();
user.set("name", "John Doe");
user.set("email", "johndoe@example.com");
user.set("age", 30);

console.log(user.get("name")); // Output: "John Doe"
console.log(user.has("email")); // Output: true

// 2
const text = "This is a sample text with some repeated words.";
const wordCounts = new Map();

for (const word of text.split(" ")) {
  wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
}

console.log(wordCounts); // Output: Map(3) { 'This' => 1, 'is' => 2, 'a' => 1, … }

//3
const cart = new Map();
cart.set("apple", 2);
cart.set("banana", 3);

console.log(cart.get("apple")); // Output: 2
cart.delete("banana");
console.log(cart.size); // Output: 1
