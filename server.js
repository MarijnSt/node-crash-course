const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    // res.setHeader('Content-Type', 'text/html')
    // res.write('<p>Elaba vrienteke</p>')
    // res.write('<p>Rebonjour</p>')
    // res.end()

    //set header
    res.setHeader('Content-Type', 'text/html')
    //send html file
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})