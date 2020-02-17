//contents of index.js

const express = require('express')

const app = express()

const port = 3000


app.get('/', (request, response) => {
    response.send('Hello from Express!')
})


app.listen(port, (err) => {
    if (err) {
        return console.log('we have a problem!!!', err)
    }

    console.log(`server is listening on ${port}`)
})
