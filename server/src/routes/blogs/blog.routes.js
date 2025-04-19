import express from "express";
import { createBlog, deleteBlog, getBlog, getBlogs, shareBlog } from "./blog.controller.js";
import { protectRoute } from "../../middleware/protectRouteMiddleware.js";

const blogRoutes = express.Router();

blogRoutes.post("/createBlog", protectRoute, createBlog);
blogRoutes.get("/all", getBlogs);
blogRoutes.get("/:blogId", getBlog);
blogRoutes.delete("/:blogId", deleteBlog);
blogRoutes.get("/share/:blogId", shareBlog);

export default blogRoutes;
