const PORT = 3000

const path = require('path')
const express = require('express')
const app = express()

function relativeToThis(thePath) {
    return path.join(__dirname, thePath)
}

app.get('/', (req, res) => res.sendFile(relativeToThis("index.html")))

app.listen(PORT)
