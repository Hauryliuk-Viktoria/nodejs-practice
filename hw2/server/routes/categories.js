
const expres = require('express');
const bodyParser = require('body-parser');

const router = expres.Router();
router.use(bodyParser.json());

const postsController = require('../controllers/categories');

// get all posts
router.get('/categories', postsController.find);

// get single post
router.get('/categories/:id', postsController.findOne);

// create a new post
// skip validators
router.post('/categories', postsController.create);

// update specific post
// PUT and PATCH
router.patch('/categories/:id', postsController.update);

// delete specific post
router.delete('/categories/:id', postsController.remove);

module.exports = router
