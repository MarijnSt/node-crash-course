const express = require('express')

//app maken
const app = express()

//luister naar reqs
app.listen(3000)

app.get('/', (req, res) => {
    res.send('<p>Home</p>')
})