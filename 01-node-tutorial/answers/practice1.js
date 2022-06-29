//Within the answers directory, create two files, practice1.js and practice2.js. +
//The practice2.js file should just have a single variable called sentence, initialized to a sentence of your choosing.+
//Export this variable. In practice1.js, require the sentence variable from the practice2.js module.+
//Require also the os and fs modules. Then, also in practice1.js, write code that will create a file, ./content/practice.txt.+
//Use asynchronous write operations. Write first the sentence and then the os.userInfo().username to the file. +
//Test practice1.js to make sure these are written to the file (they will typically appear on the same line.)+

const { sentence } = require("./practice2");

console.log(sentence)

// To use export 
const os = require('os')
const {readFile, writeFile} = require('fs')


const user = os.userInfo();
console.log(user.username)


// practice.txt file with practice2 and os info
 writeFile(
    './content/practice.txt',`${sentence},${user.username}`,
    (err)=> {
        if (err) {
            console.log(err)
            return
        }

    })

