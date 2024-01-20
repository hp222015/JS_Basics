
// Arrow function
const add = (a,b) => {return a+b};
console.log(add(3,4));

// var Template_literals
const firstName="harshit";
const str=`hello my name is ${firstName}`;
console.log(str);

// Destructuring assignment
const arr=[2,3,4,4,5,2,123,34];
const [a,b,c,...x]=arr;
console.log(a);
console.log(b);
console.log(x);


// var spread_operator;

var arr1=[0,1,2];
var arr2=[3,4,5];
var arr3=[...arr1,"harshit", ...arr2,40];
console.log(arr3);

// Object Property Shorthand
const firstname = "John";
const lastname = "Doe";

// Without shorthand
const person1 = {
  firstName: firstname,
  lastName: lastname
};

// With shorthand
const person2 = {
  firstname,
  lastname
};

console.log(person1); // { firstName: 'John', lastName: 'Doe' }
console.log(person2); // { firstName: 'John', lastName: 'Doe' }



//ES7 features
let text ="hello world";
if(text.includes("hello"))// to check key is present or not
{
      console.log("yes hello is there");
}
else
{
      console.log("no");
}
// role of obj.key and obj.values
console.log(obj1.key(1));
