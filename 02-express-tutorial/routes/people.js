const express = require('express')
const router = express.Router()

 const {
   getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    detelePerson
 } = require('../controllers/people')

//router.get('/', getPeople)
//router.post('/', createPerson)
//router.post('/postman', createPersonPostman)
//router.put('/:id', updatePerson)
//router.delete('/:id', detelePerson)

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(detelePerson)


module.exports = router