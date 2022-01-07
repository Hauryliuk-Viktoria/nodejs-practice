const postModel = require('../models/author');

const authors = [];

module.exports = class AuthorsController {
    static find(req, res) {
        AuthorModel
        .find()
        .then((authors) => {
            res.json(authors)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
    }

    static findOne(req, res) {

        AuthorModel
        .findOne()
        .then((authors) => {
            res.json(authors)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
    }

    

    static create(req, res) {

        const { name } = req.body;
        if (!name ) {
            return res.status(400).json({
                error: 'The author format is incorrect'
            })
        }
    
        const author = new AuthorModel(req.body)
        author
            .save()
            .then((author) => {
                res.json(author);
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
            
            res.status(201).json(author);
    }

    static update(req, res) {
        const { name: name, ...data } = req.body;
        const author = postModel.findOneAndUpdate(name)

        if (!author) {
            return res.status(404).json({
                error: 'The author not found'
            })
        }

        res.json(author);
    }

    static remove(req, res) {
        const { name } = req.body;

        if (!authorModel.remove(name)) {
            return res.status(404).json({
                error: 'The post was not deleted'
            })
        }

        res.json({ message: `The author with name ${name} was deleted`})
    }
}
