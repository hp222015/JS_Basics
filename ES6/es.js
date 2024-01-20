// var Template_literals;
// let firstName="harshit";
// let lastName="shinde";

//console.log(Your name is ${firstName} ${lastName});

var spread_operator;

var arr1=[0,1,2];
var arr2=[3,4,5];

var arr3=[...arr1,"harshit", ...arr2,40];
//console.log(arr3);
var arr4=[...arr1];
//console.log(arr4);
var obj1 ={
      x : 1, y : 2
}
//console.log(obj1);

var destructuring_assignment;

let arr=[10,20,30,40,50,60];

let [a1,b1] = arr;
//console.log(a,b);
let [,a2,b2]=arr;
//console.log(a,b);
let[,,,...rest]=arr;
//console.log(rest);
// in same way destructuring can be done in objects
// learn about import export

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