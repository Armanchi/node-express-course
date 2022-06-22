//Within the answers directory, create two files, practice1.js and practice2.js. +
//The practice2.js file should just have a single variable called sentence, initialized to a sentence of your choosing.+
//Export this variable. In practice1.js, require the sentence variable from the practice2.js module.+
//Require also the os and fs modules. Then, also in practice1.js, write code that will create a file, ./content/practice.txt.
//Use asynchronous write operations. Write first the sentence and then the os.userInfo().username to the file. 
//Test practice1.js to make sure these are written to the file (they will typically appear on the same line.)

const sentence = require('./practice2.js')
const os = require('os');
const fs = require('fs');



create practice.txt file 
fs.writeFile('../content/practice.txt', sentence, function (err){
    if(err) throw err;
    console.log('complete');
});





// console.log(sentence);

// const { readFileSync, writeFileSync } = require('fs')
// console.log('start')
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// writeFileSync(
//   './content/result-sync.txt',
//   `Here is the result : ${first}, ${second}`,
//   { flag: 'a' }
// )
// console.log('done with this task')
// console.log('starting the next one')

