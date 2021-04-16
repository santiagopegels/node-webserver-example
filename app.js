const express = require('express')
const hbs =require('hbs')

const app = express()

//Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials( __dirname + '/views/partials', function (err) {})

// Static content
app.use( express.static('public') )

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Road Trip by TEMPLATED'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        title: 'Road Trip by TEMPLATED'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        title: 'Road Trip by TEMPLATED'
    })
})
 
app.listen(3000)
