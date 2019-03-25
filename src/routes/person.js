const express = require('express')
const router  = express.Router()

router.get('/person', (req, res) => {
    res.send('You have requested PERSON')
})

module.exports = router