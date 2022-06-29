// console.log('Express Tutorial')

// const http = require('http')
// const {readFileSync} = require('fs');
//require file every time the server starts running

// get all files
// const homePage = readFileSync('./navbar-app/index.html')
// const homeStyles = readFileSync('./navbar-app/styles.css')
// const homeImage = readFileSync('./navbar-app/logo.svg')
// const homeLogic = readFileSync('./navbar-app/browser-app.js')

// const server = http.createServer((req, res)=>{
//     //console.log(req.method)
//     //console.log(req.url)
//     const url = req.url;
//     console.log(url)
//     //headers
//     //home page
//     if(url === '/') {
//      res.writeHead(200, {'content-type': 'text/html'} )
//      res.write(homePage)
//      //send back info to the browser
//      res.end()
//      //abput page
//     } else if (url === '/about'){
//         res.writeHead(200, {'content-type': 'text/html'} )
//         res.write('<h1>about Page</h1>')
//         res.end
//     }
//     //404
//     else{
//         res.writeHead(400, {'content-type': 'text/html'} )
//         res.write('<h1>page not found</h1>')
//         //send back info to the browser 
//         res.end()
//     }
//     })

// server.listen(5000)//what port we are listening for  

  
// const server = http.createServer((req, res) => {
//   //console.log("user hit server");
//   const url = req.url
//   //home page
//   if (url === '/') {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write(homePage)
//     res.end()
//   } //about
//   else if (url === '/about') {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write('<h1>about page</h1>')
//     res.end()
//   }//logo/image
//   else if (url === '/logo.svg') {
//     res.writeHead(200, { 'content-type': 'image/svg+xml' })
//     res.write(homeImage)
//     res.end()
//   } //logic
//   else if (url === '/browser-app.js') {
//     res.writeHead(200, { 'content-type': 'text/javascript' })
//     res.write(homeLogic)
//     res.end()
//   }  
//    //styles
//   else if (url === '/styles.css') {
//     res.writeHead(200, { 'content-type': 'text/css' })
//     res.write(homeStyles)
//     res.end()
//   } //404
//   else{
//     res.writeHead(404, { 'content-type': 'text/html' })
//     res.write('<h1>page not found</h1>')
//     res.end()
//   }
// })


// server.listen(5000) 





//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen




// app.get('/', (req,res)=>{
//     console.log('user hit the resource')
// res.send('Home Page')
// })

// app.get('/about', (req, res)=>{
//     res.status(200).send('About Page')
// })

// //handles all http verbs
// app.all('*', (req,res)=>{
//     //can chain status and send
//     res.status(404).send('<h1>resource not found</h1>')
// })