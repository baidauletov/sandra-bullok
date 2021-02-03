let date = new Date();
let datePrototype = Object.getPrototypeOf(date)
let list = Object.getOwnPropertyNames(datePrototype)

// date 

// date methods
// console.log(list)

// now hours
// console.log(date.getHours())

// today's date 
console.log(date.toLocaleDateString())
