const express = require("express");
const postController = require("../controller/post.controller")

const router = express.Router();

router.post('/', postController.save);

module.exports = router;