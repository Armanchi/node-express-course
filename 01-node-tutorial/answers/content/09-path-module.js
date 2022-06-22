const path = require('path');

//seperator property
console.log(path.sep)

//join method joins a sequence of path segments  

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)


const base = path.basename(filePath)
console.log(base)

//point to directory where app.js is located
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
//will log absolute path to test txt 
console.log(absolute)