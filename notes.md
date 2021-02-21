# Notes Lesson 2

## Bestand draaien met node
`node {filename}`

## Global object
* Vergelijkbaar met window object in browser
* Global context in node environment

Absolute path van directory en file loggen:
```javascript
console.log(__dirname)
console.log(__filename)
```

## Modules & Require
Code opsplitsen in verschillede bestanden en die importeren/exporteren naar/uit die bestanden

### Volledig bestand importeren
In people.js zit een array met data en een console.log van die array
Importeren in modules.js:
```javascript
const x = require('./people.js')
```
* Geeft de console.log
* Adres in require is **relative path**
* x zelf is een leeg object

### Specifiek deel van bestand exporteren
In people.js
```javascript
module.exports = people
```
Nu krijgt x in modules.js de waarde van deze export

Meerdere dingen exporteren: via een **object**
```javascript
module.exports = {
    people, ages
}
```
*wanneer property en variabele van value dezelfde naam hebben, kan je deze shortcut gebruiken*

### Destructuring
Handige manier om dingen te importeren uit een bestand
Voorbeeld: people rechtstreeks in variabele importeren

```javascript
const { people } = require('./people.js')
```
* Haalt people property uit export van people.js
* Variabele in modules.js moet dezelfde naam hebben als property in people.js

Meerdere properties importeren:
```javascript
const { people, ages } = require('./people.js')
```

### Core modules
Node heeft ook enkele core modules die je ook kan importeren
```javascript
const os = require('os')
```
*Geeft info over operating system*

## File system
* Bestanden lezen, maken, verwijderen
* Directories maken en verwijdere

### fs core module importeren
```javascript
const fs = require('fs')
```

### Bestanden lezen
```javascript
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) console.log(err)
    console.log(data.toString())
})
```
* Async functie: blokkeert code niet, wordt in de 'achtergrond' uitgevoerd en ondertussen worden volgende lijnen code uitgevoerd
* Zonder .toString() geeft het een buffer: `<Buffer 45 6c 61 62 61 20 76 72 69 65 6e 74 65 6b 65>`

### Bestanden schrijven
```javascript
fs.writeFile('./docs/blog1.txt', 'ieps mateke', () => {
    console.log('file was written')
})
```
* Overschrijft bestaand bestand
* Maakt een nieuw bestand als het nog niet bestond

### Directories
Folder maken:
```javascript
fs.mkdir('./assets', (err) => {
    if (err) console.log(err)
    console.log('folder created')
})
```
*Geeft error als folder al bestaat*

Controleren of folder al bestaat:
```javascript
if (fs.existsSync('./assets')) {
    //code
}
```
* Is een synchronous functie: blokkeert code vooraleer naar volgende lijnen wordt gegaan

Folder verwijderen:
```javascript
fs.rmdir('./assets', (err) => {
    if (err) console.log(err)
    console.log('folder deleted')
})
```

### Bestanden verwijderen
```javascript
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) console.log(err)
        console.log('file deleted')
    })
}
```
