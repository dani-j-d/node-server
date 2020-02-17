//contents of index.js

const express = require('express')

const app = express()



app.get('/', (request, response) => {
    throw new Error('oops')
})

app.use((err, request, response, next) => {
    //log the error, via console.log

    console.log(err)

    response.status(500).send('something broke!!!')
})

app.listen(3000)
