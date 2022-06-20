console.log('Welcome to Node Tutorial')

//os module
//built in
// const os = require('os')

// //info about current user

// const user = os.userInfo()

// console.log(user)


// console.log(`The system uptime is ${os.uptime()} seconds`)

// const currentOS = {
//     name: os.type(),
//     release:os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os/os.freemem(),
    
// }

// // console.log(currentOS)

// const path = require('path');

// //seperator property
// console.log(path.sep)

// //join method joins a sequence of path segments  

// const filePath = path.join('/content', 'subfolder', 'test.txt')
// console.log(filePath)



// const base = path.basename(filePath)
// console.log(base)




// const {readFileSync, writeFileSync} = require('fs');

// //read from file system

// const first = readFileSync('./content/first.txt', 'utf8')

// const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second)



//if no utf coding, get buffer

// 'const {readFile, writeFile} = require('fs')

// readFile('./content/first.txt', 'utf8', (err, result)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     const first = result;
//     readFile('./content/second.txt', 'utf8', (err, result) =>{
//         if(err){
//             console.log(err)
//             return;
//         }
//         const second = result
//         writeFile('./content/result-async.txt',
//         `here is the result: ${first}, ${second}`,
//         (err,result)=>{
//             if(err) {
//                 console.log(err)
//                 return;
//             }
//             console.log(result)
//         })
//     })
// })'


// const http = require('http');

// const server = http.createServer((req, res)=>{
//     if(req.url === '/'){
//         res.end('Welcome to our home page')
//     }
//     // res.write()
//     // res.end()
//     if(req.url === '/about'){
//         res.end('Here is our short history')
//     }
//     res.end(`
//     <h1>ooops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `)
// })

// server.listen(5000)
// //no exit

