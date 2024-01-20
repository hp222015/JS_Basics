// array length
const fruits = ["banana","apple","orange","kiwi"];
console.log(fruits.length);

// array to String
let str= fruits.toString();
console.log(str);

// Array at()
console.log(fruits.at(2)); 

// Array join()
console.log(fruits.join("*"));

// Array pop
let fruit=fruits.pop();//pop function returns popped element
console.log(fruits);
console.log(fruit);

// Array push
fruits.push("kiwi");
console.log(fruits);
let len=fruits.push("kiwi");
console.log(len);

// Array shift
let val=fruits.shift(); // returns the element removed
console.log(fruits,val);

// Array unshift
let l=fruits.unshift("Lemon");
console.log(fruits);
console.log(l);

//  Array indexing
console.log(fruits[0]);

// Delete -> it leaves hole in array
delete fruits[0];
console.log(fruits);
fruits[0]="banana";
console.log(fruits);

// Merging Arrays
const arr1=[1,2,3];
const arr2=[4,5,6];
const arr3=[7,8,9];
const arr4=arr1.concat(arr2,arr3);// concat function can take any no.  of arguments
console.log(arr4);
let arr5 = arr4.concat("harshit");
console.log(arr5);

// Array Copy within
console.log(fruits);
fruits.copyWithin(2,0);
console.log(fruits);

// Flatenning an Array
const arr6 =[[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
console.log(arr6.flat());

// splice
console.log(fruits);
fruits.splice(4,2,"Tomato","Potato","LadyFinger","Guava");
console.log(fruits);

// splice to remove
console.log(fruits);
fruits.splice(0,1);
console.log(fruits);

// to spliced()
// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);
// console.log(spliced);

console.log(1);
const citrus= fruits.slice(1);
const st1=fruits.slice(1,3);
console.log(citrus);
console.log(st1);

// search methods in array

console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf("apple"));
console.log(fruits.includes("NaN"));
console.log(arr2.find(func1));

function func1(val)
{
      return val>3;
}
console.log(arr2.findIndex(func1));
console.log(arr3.findLast(x => x>5));
console.log(arr3.findLastIndex(x => x>5));
vegetables = ["tomato","potato","cocumber","ladyfinger"];
vegetables.sort();
console.log(vegetables);
vegetables.reverse();
console.log(vegetables);
//const sorted= vegetables.toSorted();
//const reversed= vegetables.toReversed();
const points = [40, 100, 1, 5, 25, 10];
points.sort();
console.log(points);
points.sort(function(a,b){return a-b});
console.log(points);
console.log(Math.min.apply(null,points));
console.log(Math.min(1,2,3));
// sorting objects
const cars = [
      {type:"Volvo", year:2001},
      {type:"Saab", year:2001},
      {type:"BMW", year:2010}
    ];
cars.sort(function(a,b){return a.year - b.year});
console.log(cars);
// for each 
const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  value+= 1;
  console.log(value);
}
const numbers2 = numbers.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
console.log(numbers2);

// filter
const evenNumbers = numbers.filter((value) => value % 2 === 0);

console.log(evenNumbers);

// reduce
const sum = numbers.reduce((a, c) => a+c, 0);

console.log(sum);