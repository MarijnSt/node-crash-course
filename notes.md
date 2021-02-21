# Notes Lesson 2

## Bestand draaien met node
`node {filename}`

## Global object
* Vergelijkbaar met window object in browser
* Global context in node environment

## Absolute path van directory en file loggen
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
* wanneer property en variabele van value dezelfde naam hebben, kan je deze shortcut gebruiken *

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
* Geeft info over operating system *