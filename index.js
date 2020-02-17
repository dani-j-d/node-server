//contents of index.js

const http = require('http')

const port = 3000

const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listenerCount(port, (err) => {
    if (err) {
        return console.log('We have a problem!!', err)
    }

    console.log(`server is listening on ${port}`)
})