const express = require('express')
//takes care of routing
const router = express.Router()

const  {
    getPeople,
    createPerson, 
    createPersonPostman, 
    updatePerson, 
    deletePerson,
} = require('../controllers/people')

//  router.get('/', getPeople) //,(req, res)=>{//not same as post methd with the same url
// //     res.status(200).json({success:true, data:people}) //reading data
// // })

// router.post('/', createPerson) //(req,res)=>{//adding data
// //     const {name} = req.body
// //     if(!name){
// //         return res
// //         .status(400)
// //         .json({success: false, msg:'please provide name value'})
// //     }
// //     res.status(201).send({success:true, person:name})
// // })

// router.post('/postman',createPersonPostman)// (req, res)=>{
// //     const {name} = req.body
// //     if(!name){
// //         return res
// //         .status(400)
// //         .json({success: false, msg:'please provide name value'})
// //     }
// //     res.status(201).send({success: true, data:[...people, name]})
// // })


//  router.put('/:id', updatePerson)// (req,res)=>{
// //     const {id} = req.params
// //     const {name} = req.body

// //     const person = people.find((person)=> person.id === Number(id))
// //     if(!person) {
// //         return res.status(404).json({success:false, msg: `no person with id ${id}`})
// //     }
// //     const newPeople = people.map((person)=>{
// //         if(person.id === Number(id)){
// //             person.name = name
// //         }
// //         return person
// //     })
// //     res.status(200).json({success:true, data: newPeople})

// // })

// router.delete('/:id',deletePerson)//(req,res)=>{
// //     const person = people.find((person) => person.id === Number(req.params.id))

// //     if(!person) {
// //         return res.status(404).json({success: false, msg: `no person with id ${req.params.id}` })
// //     }
// //     const newPeople = people.filter((person)=> person.id !== Number(req.params.id));
// //     return res.status(200).json({success:true, data:newPeople})
// // })
//different setup chaining methods
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/id').put(updatePerson).delete(deletePerson);

module.exports = router