// Rule of thumb, we do not compare non-primitive data types. Do not compare arrays, functions, or objects. Non-primitive values are referred to as reference types, because they are being compared by reference instead of value.


let nums = [1, 2, 3]
// nums[0] = 10
// console.log(nums) // [10, 2, 3]

// let numbers = [1, 2, 3]
// console.log(nums == numbers) // false

let userOne = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}
let userTwo = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}
console.log(userOne == userTwo) //false

let numbers = nums
console.log(nums == numbers) //true