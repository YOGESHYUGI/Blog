import express from "express";
import Blog from "../Modules/blogs.js"
 
const router = express.Router()
 
router.get("/getallblogs", async (req, res) => {
    try {
        const blog = await Blog.find()
        res.send(blog)
    } catch (error) {
        return res.status(400).json({ error });
    }
});
 
router.post("/saveblog", async (req, res) => {
    const newBlog = new Blog({
        Heading: req.body.Heading,
        Desc:req.body.Desc,
        Image:req.body.Image
    })
    try {
        const blog = await newBlog.save()
        res.send(blog)
    } catch (error) {
        return res.status(400).json({ error });
    }
});
 
export default router
