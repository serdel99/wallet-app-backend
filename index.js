
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! to many test asdasd')
})

app.listen(port, () => {
    console.log(`hello world  asd`)
})