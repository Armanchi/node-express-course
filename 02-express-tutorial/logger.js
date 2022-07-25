const logger = (req, res, next) =>{//express will supply req, res, and also next
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear();
    console.log(method, url, time)
    // res.send('testing')
    next()//pass onto next function
    //either terminate by sending response or pass it to next middleware
}

module.exports = logger