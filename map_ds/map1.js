// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.


// Map  using newMap() constructor

const names= new Map([
      ["Harshit",98],
      ["Sam",93],
      ["Lal",95],
      [92,"Mani"],
      [92,"Punit"]// second key overwrites first one
]);
// adding more using map.set
names.set("Shiv",97);
console.log(names);

names.set("Faiz",100);
names.set("Div",112);

// fetching from map using get()

const a=names.get("Div");
const b=names.get("Harshit");
console.log(a,b);

// finding map size 
console.log(names.size);

// delete from map
const name1=names.delete(32);// returns true or false based on no. in map or not
console.log(names);
console.log(name1);
// has
const hp=names.has("Harshit");
console.log(hp);

// typeof
console.log(typeof names); // object

// instance of
console.log(names instanceof Map);// checks given object here names is a map or not


// object vs              maps
//    |                    |
//  not iterable     |  iterable
//                   |
//  no size property |  size property
//                   |
// keys:string       |  keys: not necessary string
// not ordered       |  ordered by insertion
// have default keys |  no default keys


// for each in maps
let str="";
names.forEach((a,b)=>{str+= a + '=' + b + " "})
console.log(str);
const arr=str.split(' ');
console.log(arr);

names.forEach((a,b)=>(b,a))
console.log(names);
console.log('\n');


// map.entries

let str1= "";
for( const x of names.entries()) {
      str1+=x+"\n";
}
console.log(str1);


//  map.keys

let str2="";
for (const x of names.keys())
{
      str2+=x;
     
}
console.log(str2);

// map.values
const fruits = new Map([
      ["apples", 500],
      ["bananas", 300],
      ["oranges", 200]
    ]);
    
    let text = "";
    for (const x of fruits.values()) {
      text += x;
    }
    console.log(text);

// objects as keys in maps
const a1 = {name: 'Apples'};
const b1 = {name: 'Bananas'};
const o1 = {name: 'Oranges'};
const fruit1 = new Map();
fruit1.set(a1,32);
fruit1.set(b1,35);
fruit1.set(o1,34);
console.log(fruit1);

// clear
names.clear();
names.set("2","1");
let names2=new Map();
names.forEach((a, b) => {
      names2.set(b, a); 
    });
console.log(names2);
console.log(names);


// counting frequency of words in text 

let text1="In the bustling city, city lights illuminated the night sky, creating a cityscape that mesmerized the city dwellers. People rushed through the city streets, streets filled with the energy of the city's constant movement. The city's heartbeat echoed in the background, background music to the urban symphony. Amidst the city noise, noise complaints were drowned out by the city's relentless rhythm. The city's charm lay in its ability to embrace and celebrate the quirks that made it a unique city, a city where the repetition of daily life was both comforting and exhilarating."
let arr21=text1.split(' ');
let count = new Map();
let c=0;
arr21.forEach((word)=>
{
      count.set(word,(count.get(word)||0)+1);
});

console.log(count);

// assigning map to variable

let m1= new Map();
console.log(m1);

// adding key value pairs
m1.set('hand',2);
m1.set('ear',2);
console.log(m1);
let m2=new Map([['eye',2],['nose',1],['legs',2]]);
console.log(m2);
m2.forEach((a,b)=>{m1.set(a,b);});
console.log(m1);











