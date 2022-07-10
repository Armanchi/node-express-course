const express = require('express')
const consoleLog = require('./practice-middleware') //require consoleLog func
const app = express()

const path = require('path')


//Create a file practice-middleware.js. In it, create a middleware function called consoleLog(req, res, next) that logs a statement 
//to the console and then invokes the next function. Export this function. 
//Edit practice-express.js to require the consoleLog function, and add an app.use statement so that it is invoked before every request. 
//Test the practice-express.js program to make sure the middleware is working, 
//accessing your express program from the browser using localhost:3000 as before.

app.use('/', consoleLog)

app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './new-public/index.html'))
})

app.get('/sample', (req,res) => {
    res.status(200).send('This is working')
})



app.listen(3000, () =>{
    console.log('server is listening on port 3000..')
})
