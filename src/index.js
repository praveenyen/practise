const express = require('express')
const app     = express()

let personRoute = require('./routes/person')

app.use(personRoute)

app.use(express.static('public'))

const PORT = process.env.PORT || 8092

app.get('/api', (req,res) => {
    res.send('Nice to see you here!');
})

app.listen(PORT, () => {
    console.info("App started on port " + PORT)
})