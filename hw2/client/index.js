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

app.set('views', './views');

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.get('/posts', (req, res) => {
    const posts = [
        {
            name: 'Post 1',
            body: 'Some description 1',
            categories: 'Category 1',
            tags: 'Tag 1',
            author: 'Some author 1'},
        {
            name: 'Post 2',
            body: 'Some description 2',
            categories: 'Category 2',
            tags: 'Tag 2',
            author: 'Some author 2'},
        {
            name: 'Post 3',
            body: 'Some description 3',
            categories: 'Category 3',
            tags: 'Tag 3',
            author: 'Some author 3'
        }
    ]

    const havePosts = !!posts.length;
    console.log(havePosts)

    res.render('posts', { posts, total: posts.length, havePosts })
})

app.post('/post', (req, res) => {

    const chunks = [];

    req.on('data', (chunk) => {
        chunks.push(chunk);
    })

    req.on('end', () => {

        const data = JSON.parse(Buffer.concat(chunks).toString());

        console.log(data, data.key);

        res.send('It is ok')
    });
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
