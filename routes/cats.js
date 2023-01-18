const { Router } = require('express')
const catsCtrl = require('../controllers/cats.js')

const router = Router()

router.post('/', catsCtrl.create)
router.get('/', catsCtrl.index)
router.put('/:id', catsCtrl.update)
router.delete('/:id', catsCtrl.deleteCat)

module.exports = router