// 1. Variable Declaration
var variableVar; // Declaration using 'var'
let variableLet; // Declaration using 'let'
const variableConst = 42; // Declaration and initialization using 'const'

// 2. Variable Assignment
variableVar = 'Hello, World!'; // Assigning a string value to variableVar
variableLet = 123; // Assigning a numeric value to variableLet

// 3. Variable Naming Conventions
let camelCaseVariable; // Camel case is a common naming convention in JavaScript
let descriptiveVariableName; // Use descriptive names for better code readability

// 4. Data Types in Variables
let stringVariable = 'I am a string';
let numberVariable = 42;
let booleanVariable = true;

// 5. Variable Scope
function exampleScope() {
  if (true) {
    var functionScopedVar = 'I am function-scoped'; // 'var' has function scope
    let blockScopedLet = 'I am block-scoped'; // 'let' has block scope
  }
  console.log(functionScopedVar); // Accessible here
  // console.log(blockScopedLet); // Error: blockScopedLet is not defined outside the block
}

// 6. Hoisting
console.log(hoistedVar); // Outputs 'undefined' due to hoisting
var hoistedVar = 'I am hoisted';

// 7. Constants
const pi = 3.14; // Constant variable