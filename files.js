const fs = require('fs')

// bestanden lezen
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) console.log(err)
//     console.log(data.toString())
// })
// console.log('last line')


// bestanden schrijven
// fs.writeFile('./docs/blog1.txt', 'ieps mateke', () => {
//     console.log('file was written')
// })

// fs.writeFile('./docs/blog2.txt', 'rebonjour', () => {
//     console.log('file was written')
// })


// directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) console.log(err)
//         console.log('folder created')
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) console.log(err)
//         console.log('folder deleted')
//     })
// }


// bestanden verwijderen
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) console.log(err)
        console.log('file deleted')
    })
}