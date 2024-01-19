var arrayOperations;

var arrayname = [1, 1, 2, 3, 4, 5];

arrayname.forEach(elements => {
      console.log(elements);
});

let fruits = ["Apple", "Orange", "kiwi"];
let l = fruits.length;
console.log(fruits[l - 1]);
fruits.push("watermelon");
console.log(fruits[fruits.length - 1]);
console.log(fruits.indexOf("Apple"));
fruits.splice(1, 2, "Mango");
fruits.shift();
fruits.unshift("Apple", "Banana");
console.log(fruits);
let arr = fruits.slice();
console.log(arr);
let upd_str = arr.join(" ");
console.log(upd_str);
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(...arr1, ...arr2);