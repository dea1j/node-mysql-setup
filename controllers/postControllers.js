const Post = require('../models/Post')
const POST = require('../models/Post')

exports.getAllPosts = async (req, res, next) => {
    try {
        const [posts, _] = await Post.findAll()

        res.status(200).json({count: posts.length, posts: posts});
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.createPost = async (req, res, next) => {
    try {
        let {title, body} = req.body;
        let post = new Post(title, body);
    
        post = await post.save()
        console.log(post)
        res.status(201).json({ message: "Post Created" })
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.getPostById = async (req, res, next) => {
    try {
        let [post, _] = await Post.findById(req.params.id)
        res.status(200).json({post});
    } catch (error) {
        console.log(error)
        next(error)
    }
}