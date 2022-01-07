
const expres = require('express');
const bodyParser = require('body-parser');

const router = expres.Router();
router.use(bodyParser.json());

const postsController = require('../controllers/authors');

// get all posts
router.get('/authors', postsController.find);

// get single post
router.get('/authors/:id', postsController.findOne);

// create a new post
// skip validators
router.post('/authors', postsController.create);

// update specific post
// PUT and PATCH
router.patch('/authors/:id', postsController.update);

// delete specific post
router.delete('/authors/:id', postsController.remove);

module.exports = router
