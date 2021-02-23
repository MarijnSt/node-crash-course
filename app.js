const express = require('express')

//app maken
const app = express()

//luister naar reqs
app.listen(3000)

//res geven
app.get('/', (req, res) => {
    // res.send('<p>Home</p>')
    res.sendFile('./views/index.html', {
        root: __dirname
    })
})
app.get('/about', (req, res) => {
    // res.send('<p>About</p>')
    res.sendFile('./views/about.html', {
        root: __dirname
    })
})