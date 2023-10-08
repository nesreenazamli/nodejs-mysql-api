const models = require("../models")
function save(req, res) {
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
        userId: 1,
    }
    models.Post.create(post).then(value => {
        res.status(201).json({
            message: 'Post created successfully',
            post:value
        })
    }).catch(reason => {
        res.status(500).json({
            message: 'Something went wrong!',
            post:reason
        })
    });

}

module.exports = {save :save}