
const expres = require('express');
const bodyParser = require('body-parser');

const router = expres.Router();
router.use(bodyParser.json());

const postsController = require('../controllers/posts');

// get all posts
router.get('/posts', postsController.find);

// get single post
router.get('/posts/:id', postsController.findOne);

// create a new post
// skip validators
router.post('/posts', postsController.create);

// update specific post
// PUT and PATCH
router.patch('/posts/:id', postsController.update);

// delete specific post
router.delete('/posts/:id', postsController.remove);

module.exports = router
