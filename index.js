//contents of index.js

const path = require('path')

const express = require('express')

const exphbs = require('express-handlebars')

const app = express()

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.get('/', (request, response)=>{
    response.render('home',{
        name: 'John Jacobs'
    })
})

app.set('view engine', '.hbs')

app.set('views', path.join(__dirname, 'views'))

app.listen(3000, () => console.log('Server is listening on port 3000'))
