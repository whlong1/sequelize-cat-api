const { Router } = require('express')
const toysCtrl = require('../controllers/toys.js')

const router = Router()

router.post('/', toysCtrl.create)

module.exports = router