const postModel = require('../models/tag');

const tags = [];

module.exports = class TagsController {
    static find(req, res) {
        TagModel
        .find()
        .then((tags) => {
            res.json(tags)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
    }

    static findOne(req, res) {

        TagModel
        .findOne()
        .then((tags) => {
            res.json(tags)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
    }

    

    static create(req, res) {

        const { name } = req.body;
        if (!name ) {
            return res.status(400).json({
                error: 'The tag format is incorrect'
            })
        }
    
        const tag = new TagModel(req.body)
        tag
            .save()
            .then((tag) => {
                res.json(tag);
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
            
            res.status(201).json(tag);
    }

    static update(req, res) {
        const { name:name, ...data } = req.body;
        const tag = postModel.findOneAndUpdate(name)

        if (!tag) {
            return res.status(404).json({
                error: 'The tag not found'
            })
        }

        res.json(tag);
    }

    static remove(req, res) {
        const { name } = req.body;

        if (!postModel.remove(name)) {
            return res.status(404).json({
                error: 'The tag was not deleted'
            })
        }

        res.json({ message: `The tag with name ${name} was deleted`})
    }
}
