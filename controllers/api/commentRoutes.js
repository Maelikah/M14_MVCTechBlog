const router = require('express').Router();
const { User, Blog, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

// Get all comments
router.get('/', async (req, res) => { 
    try {
        console.log("HELLO WORLD!")
        const commentData = await Comment.findAll({
            include: [{
                model: User,
             //   attributes: ['username'], 
            }],
        });
        
        const comments = commentData.map(comment => comment.toJSON());
        console.log("this are the comments", comments);
        res.status(200).render('/', { comments });
    } catch (err) {
        res.status(500).json(err);
    }
});

// create new comment
router.post('/', withAuth, async (req, res) => {

    try {
        const newComment = await Comment.create({
        
            ...req.body,
            comment: req.body.comment,
            blog_id: req.body.blog_id,
            user_id: req.session.user_id,
            
        });
        console.log(newComment);
        res.status(200).json(newComment);
        } catch (err) {
        console.log(err);
        res.status(400).json(err);
        }
});

module.exports = router;

