const express = require('express')
const app = express()
const { products } = require('./data')
app.get('/', (req, res) => {
  res.json(products)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})



// const express = require('express');
// const app = express();
// //importing from data.js file
// const {products} = require('./data')

// app.get('/',(req, res)=>{
//     res.json(products)
// })



// app.listen(5000, () => {
//     console.log('server is listening on port 5000....')
// })
