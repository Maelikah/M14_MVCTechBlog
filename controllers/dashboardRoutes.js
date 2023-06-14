const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

//Get blog posts that need to be edited or deleted by id
router.get('/editBlog/:id', async (req, res) => {
    try {
        const blogUpdate = await Blog.findByPk(req.params.id);

        if(blogUpdate) {
            
            const blog = blogUpdate.get({plain: true});
            res.render('editBlog', {
                ...blog,
                logged_in: true
            });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
