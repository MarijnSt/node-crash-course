const express = require('express')

//app maken
const app = express()

//luister naar reqs
app.listen(3000)

//res geven
app.get('/', (req, res) => {
    // res.send('<p>Home</p>')
    res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    // res.send('<p>About</p>')
    res.sendFile('./views/about.html', { root: __dirname })
})

//redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

//404
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})