const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res

// app.use([logger, authorize])
// app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})



// const express = require('express')
// const app = express()
// const logger = require('./logger')
// const authorize = require('./authorize')
// // req => middlewar => res

// // app.use([logger, authorize])// use array to execute multiple middleware functions
// //api/home/about/products

// // app.use(express.static('./public'))//places all contents as static assets 


// app.get('/',  (req,res) => {//path and callback function
//     res.send('Home')
// })

// app.get('/about',  (req, res) => {
//     res.send('About')
// }) 


// app.get('/api/products', (req,res) => {//path and callback function
 
//     res.send('Products')
// })

// app.get('/api/items', (req, res) => {
//     console.log(req.user)
//     res.send('Items')
// })
 
// app.listen(5000, () =>{
//     console.log('server is listening on port 5000....')
// })