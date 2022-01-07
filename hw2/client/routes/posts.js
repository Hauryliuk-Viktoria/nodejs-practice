const express = require('express');

const { getDb } = require('../database');

const router = express.Router();

router.get('/posts', (req, res) => {
    const db = getDb();
    db
        .collection('posts')
        .find()
        .toArray()
        .then((posts) => {
            res.json(posts)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
})

router.post('/posts', (req, res) => {
    const db = getDb();
    db
        .collection('posts')
        .insertOne(req.body)
        .then((data) => {
            console.log(data)
            res.json({ message: 'The post was created' })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
})

module.exports = router
