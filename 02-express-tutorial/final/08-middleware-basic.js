const express = require('express')
const app = express()

//  req => middleware => res

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})



// const express = require('express')
// const app = express()

// const logger = (req, res, next) =>{//express will supply req, res, and also next
//   const method = req.method
//   const url = req.url
//   const time = new Date().getFullYear();
//   console.log(method, url, time)
//   // res.send('testing')
//   next()//pass onto next function
//   //either terminate by sending response or pass it to next middleware
// }

// app.get('/', logger, (req, res) => {
//   res.send('Home')
// })
// app.get('/about', logger, (req, res) => {
//   res.send('About')
// })

// app.listen(5000, () => {
//   console.log('Server is listening on port 5000....')
// })
