const { Router } = require('express')

const router = Router()

/* GET home page. */
router.get('/', function (req, res) {
  res.status(200).json({ msg: 'Hello World' })
})

module.exports = router