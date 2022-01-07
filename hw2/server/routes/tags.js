
const expres = require('express');
const bodyParser = require('body-parser');

const router = expres.Router();
router.use(bodyParser.json());

const postsController = require('../controllers/tags');

// get all posts
router.get('/tags', postsController.find);

// get single post
router.get('/tags/:id', postsController.findOne);

// create a new post
// skip validators
router.post('/tags', postsController.create);

// update specific post
// PUT and PATCH
router.patch('/tags/:id', postsController.update);

// delete specific post
router.delete('/tags/:id', postsController.remove);

module.exports = router
