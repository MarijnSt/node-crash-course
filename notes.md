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