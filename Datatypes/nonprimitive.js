let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) // [10, 2, 3]

let num = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers) // false

let userOne = {
  name: 'Harshit',
  role: 'learner',
  country: 'India'
}
let userTwo = {
  name: 'Harshit',
  role: 'learner',
  country: 'India'
}
console.log(userOne == userTwo) // false

let num1;
let number1 = num1;
console.log(num1 == number1)  // true

let user1 = {
      name: 'Harshit',
      role: 'learner',
      country: 'India'
}
let user2 = user1
console.log(user1 == user2)  // true