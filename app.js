// const add = require('./utils.js')
// //const name = 'muskan'
// const sum = add(4,-1)
// console.log(sum)
const validator = require('validator')
const checkget = require('./notes.js')
const msg = checkget()
console.log(msg)
//console.log(validator.isEmail('muskan@example.com'))
console.log(validator.isURL('https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#overview@example.com'))
