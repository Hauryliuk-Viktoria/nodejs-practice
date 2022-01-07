const postModel = require('../models/post');

const posts = [];

module.exports = class PostsController {
    static find(req, res) {
        PostModel
        .find()
        .populate('categories')
        .populate('tags')
        .populate('author')
        .then((posts) => {
            res.json(posts)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
    }

    static findOne(req, res) {

        PostModel
        .findOne()
        .populate('categories')
        .populate('tags')
        .populate('author')
        .then((posts) => {
            res.json(posts)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
    }

    

    static create(req, res) {

        const { name, body, categories, tags, author } = req.body;
        if (!name || !body || !categories || !tags || !author) {
            return res.status(400).json({
                error: 'The post format is incorrect'
            })
        }
    
        const post = new PostModel(req.body)
        post
            .save()
            .then((post) => {
                res.json(post);
            })
            .catch((error) => {
                res.status(400).json({ error: 'The post not created' })
            })
            
            res.status(201).json(post);
    }

    static update(req, res) {
        const { ...data } = req.body;
        const post = postModel.findOneAndUpdate(data)

        if (!post) {
            return res.status(404).json({
                error: 'The post not found'
            })
        }

        res.json(post);
    }

    static remove(req, res) {
        const { name } = req.body;

        if (!postModel.remove(name)) {
            return res.status(404).json({
                error: 'The post was not deleted'
            })
        }

        res.json({ message: `The post with id ${name} was deleted`})
    }
}
