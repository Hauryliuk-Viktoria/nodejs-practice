const postModel = require('../models/category');

const categories = [];

module.exports = class CategoriesController {
    static find(req, res) {
        CategoryModel
        .find()
        .then((categories) => {
            res.json(categories)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
    }

    static findOne(req, res) {

        CategoryModel
        .findOne()
        .then((categories) => {
            res.json(categories)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
    }

    

    static create(req, res) {

        const { name } = req.body;
        if (!name ) {
            return res.status(400).json({
                error: 'The category format is incorrect'
            })
        }
    
        const category = new CategoryModel(req.body)
        category
            .save()
            .then((category) => {
                res.json(category);
            })
            .catch((error) => {
                res.status(400).json({ error: 'The category not created' })
            })
            
            res.status(201).json(category);
    }

    static update(req, res) {
        const { name:name, ...data } = req.body;
        const category = categoryModel.findOneAndUpdate(name)

        if (!category) {
            return res.status(404).json({
                error: 'The category not found'
            })
        }

        res.json(category);
    }

    static remove(req, res) {
        const { name } = req.body;

        if (!categoryModel.remove(name)) {
            return res.status(404).json({
                error: 'The category was not deleted'
            })
        }

        res.json({ message: `The category with id ${name} was deleted`})
    }
}
