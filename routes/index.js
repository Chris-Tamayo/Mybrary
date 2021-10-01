const express = require('express')
const router = express.Router()

// uses GET action, pass the request and response
router.get('/', (req, res) => {
    res.render('index') // send text as response
})

module.exports = router // can import variables to other files