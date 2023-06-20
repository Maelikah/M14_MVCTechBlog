const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get all blog posts and also their related user data
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
    });

    // Serialize data to be used by handlebars
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    

    res.render('homepage', {
        blogs,
        loggedIn: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
    });

//Get blog posts by id
router.get('/blogs/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    include: User, // Include the User model for each Comment
                },
                User, // Include the User model for the blog itself
            ],
    });

    // Serialize data to be used by handlebars
    const blog = blogData.get({ plain: true });

    res.render('blog', {
        ...blog,
        loggedIn: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
    });

//Force authentication when accessing dashboard
router.get('/dashboard', withAuth,  async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            include: [{model: Blog}],
    });

    // Serialize data to be used by handlebars
    const user = userData.get({ plain: true });

    res.render('dashboard', {
        ...user,
        loggedIn: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
    });

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    
    res.render('login');
});

router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    
    res.render('signup');
});

module.exports = router;
