const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const { productID } = req.params

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hello world')
})

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})



// const express = require('express');
// const app = express();
// //importing from data.js file
// const {products} = require('./data')

// app.get('/',(req, res)=>{
//     res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
// })

// app.get('/api/products', (req,res)=>{
//     //sending back array with specific products 
//     const newProducts = products.map((product)=>{
//         const{id, name, image} = product;
//         return{id,name,image}
//     })
//     res.json(products)
// })
// //looking for item 1
// //using route
// app.get('/api/products/:productID', (req,res)=>{
//     // console.log(req);
//     // console.log(req.params);//access data
//     const {productID} = req.params;
//     //sending back single product
//     const singleProduct = products.find((product)=> product.id === Number(productID))//if product id matches 1, sinlge product returned/ will always come back as a string
//     if(!singleProduct){
//         return res.status(404).send('Product Does Not Exist')
//     }
//      return res.json(singleProduct)  
//     })
//     //access to all reviews
//     app.get('/api/products/:productID/reviews/:reviewID', (req,res)=>{
//         console.log(req.params)
//         res.send('hello world')
//     })
// //query string  
// app.get('/api/v1/query', (req, res)=>{
//     // console.log(req.query);
//     const {search, limit} = req.query
//     let sortedProducts = [...products]

// if(search){
//     sortedProducts = sortedProducts.filter((product)=>{
//         return product.name.startsWith(search)
//     })
// }

// if(limit){
//     sortedProducts = sortedProducts.slice(0, Number(limit))
// }

// if(sortedProducts.length < 1){
//     // res.status(200).send('no products matched your search');
//     //one response per request
//     return res.status(200).json({success:true, data: []})
// }
// res.status(200).json(sortedProducts)

// res.send('hello world')
// })


     

// app.listen(5000, () => {
//     console.log('server is listening on port 5000....')
// })





