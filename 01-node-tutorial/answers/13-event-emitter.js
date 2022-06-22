const EventEmitter = require('events');

 const customEmitter = new EventEmitter()

 //can have as many functions listening for event
 customEmitter.on('response', (name, id)=>{
    console.log(`data received user ${name} with id:${id}`)
 })

 customEmitter.on('response', ()=>{
    console.log(`some other logic here`)
 })


//order matters. listen for event then emit
 customEmitter.emit('response', 'john', 34)