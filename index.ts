
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req:any, res:any) => {
    res.send('Hello-World From ts')
})

app.listen(port, () => {
    console.log(`Hello`)
})