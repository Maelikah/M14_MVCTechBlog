const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


// Create a new blog post
router.post('/', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });
    
        res.status(200).json(newBlog);
        } catch (err) {
        res.status(400).json(err);
    }
});

//Update existing blog
router.put('/:id', withAuth, async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);

        if (!blog) {
            res.status(404).json({ message: 'No blog found with this id!' });
            return;
        }

        // Update only the modified fields
        if (req.body.title && req.body.title !== blog.title) {
            blog.title = req.body.title;
        }
        if (req.body.content && req.body.content !== blog.content) {
            blog.content = req.body.content;
        }

        await blog.save();

        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json(err);
    }
});


// delete blog post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
        },
        
        });

        if (!blogData) {
        res.status(404).json({ message: 'No blog found with this id!' });
        return;
        }

    res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;