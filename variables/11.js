const a=(function f1(a,b)
{
      return a+b;
})(1,3);
console.log(a);

// ===
let a2=2;
let b="2";
console.log(a2===b);

// == 
let a1=2;
let b1="2";
a1==b;
console.log(typeof a1);

// apply , call and bind
// Sample object
const person = {
      name: "John",
      age: 30,
  };
  
  // Sample function
  function sayHello(greeting) {
      console.log(`${greeting}, ${this.name}!`);
  }
  
  // Using 'call' to invoke the function with a specific 'this' value
  sayHello.call(person, "Hello");  // Output: Hello, John!
  
  // Using 'apply' to invoke the function with a specific 'this' value and an array of arguments
  sayHello.apply(person, ["Hola"]);  // Output: Hola, John!
  
  // Using 'bind' to create a new function with a specific 'this' value (without invoking it immediately)
  const greetJohn = sayHello.bind(person);
  greetJohn("Bonjour");  // Output: Bonjour, John!
  