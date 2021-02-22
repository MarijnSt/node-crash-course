*Na elke verandering in server bestand moet je server herstarten*

# Request object
```javascript
const server = http.createServer((req, res) => {
    console.log(req)
})
```
* Gigantisch object met alle info over request
* Voorbeelden: `req.url` en `req.method` geven bezochte url en request method

# Response object
Response geven op request
1. Response headers instellen
2. Content van response schrijven
3. Response beëindigen en naar browser sturen
```javascript
res.setHeader('Content-Type', 'text/plain')
res.write('Elaba vrienteke')
res.end()
```

# HTML pagina's aan browser geven
Header instellen
```javascript
res.setHeader('Content-Type', 'text/plain')
```
Bestand lezen en aan response object meegeven via file system core module
```javascript
fs.readFile('./views/index.html', (err, data) => {
if (err) {
    console.log(err)
} else {
    res.write(data)
}
res.end()
})
```

# Basic routing
Voorbeeld: verschillende pagina's in views folder

Switch gebruiken voor path naar pagina te geven
```javascript
let path = './views'
switch (req.url) {
    case '/':
        path += '/index.html'
        break;
    case '/about':
        path += '/about.html'
        break;
    default:
        path += '/404.html'
        break;
}
```
Path meegeven in readFile functie
```javascript
fs.readFile(path, (err, data) => {
    // code
}
```

# Status codes
Beschrijft type van response dat naar browser wordt gestuurd en hoe succesvol de request was
* 100 range: informatie voor browser
* 200 range: succes codes
* 300 range: redirect codes
* 400 range: user/client errors
* 500 range: server errors

Toevoegen aan response via statusCode property
```javascript
res.statusCode = 200
```

# Redirects
Voorbeeld: pagina /about-me verandert naar /about

Op je eigen website kan je links wel vervangen maar andere websites die naar die pagina linken, zullen nog altijd een 404 krijgen

Redirect instellen in routing switch
```javascript
case '/about-me':
    res.statusCode = 301
    res.setHeader('Location', '/about')
    res.end()
    break;
```
