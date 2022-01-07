const express = require('express')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars'); 

const { connect, disconnect } = require('./database')

const postsRoutes = require('./routes/posts')

const app = express()

app.use(bodyParser.json())

app.use(postsRoutes)

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}))

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.get('/disconnect', (req, res) => {
    disconnect(() => {
        res.send('The MongoDB connection was closed')
    })
})


connect((error) => {
    if (error) {
        console.log(error)
    }

    app.listen(3000, () => {
        console.log('It is running')
    })
})


// todo: check callback version
// client.connect((client) => {
//     console.log(client)

//     app.listen(3000, () => {
//         console.log('It is running')
//     })
// })
