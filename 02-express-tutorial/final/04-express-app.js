const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})


const express = require('express');
const app = express()

const path = require('path')

//setup static and middleware
app.use(express.static('./public'))

//can be added to static assets 
// app.get('/', (req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// adding to static assets
// server side rendering
// })


app.all('all', (req, res)=>{
    res.status(404).send('resource not found')
})




app.listen(5000, () => {
    console.log('server is listening on port 5000.....');
})