import express from "express";
import { protectRoute } from "../../middleware/protectRouteMiddleware.js";
import { createBlog, deleteBlog, getBlog, getBlogs } from "./blog.controller.js";

const blogRoutes = express.Router();

blogRoutes.post("/createBlog", protectRoute, createBlog);
blogRoutes.get("/all", getBlogs);
blogRoutes.get("/:blogId", getBlog);
blogRoutes.delete("/:blogId", deleteBlog);

export default blogRoutes;
