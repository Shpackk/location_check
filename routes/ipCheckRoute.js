const { Router } = require('express')
const router  = Router()
const locationController = require('../controllers/locationCheck')

router.get('/location', locationController.checkLocation)

module.exports = router