import prisma from "../../config/prisma.js";
import { BAD_REQUEST, CREATED, NOT_FOUND, OK } from "../../constants/http.js";
import appError from "../../utils/errorHandler.js";

export const createBlog = async (req, res, next) => {
  try {
    const { title, content, tags } = req.body;
    const userId = req.user?.id;

    if (!title || !content) {
      throw new appError("Title and content are required", BAD_REQUEST);
    }

    const newBlog = await prisma.blog.create({
      data: {
        title,
        content,
        tags: tags || [],
        author: {
          connect: { id: userId },
        },
      },
    });

    res.status(CREATED).json({
      success: true,
      message: "Blog created successfully",
      blog: newBlog,
    });
  } catch (error) {
    next(error);
  }
};

export const getBlogs = async (req, res, next) => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
    });

    res.status(OK).json({
      success: true,
      count: blogs.length,
      blogs,
    });
  } catch (error) {
    next(error);
  }
};

export const getBlog = async (req, res, next) => {
  try {
    const { blogId } = req.params;
    const blog = await prisma.blog.findUnique({
      where: { id: parseInt(blogId) },
    });

    if (!blog) {
      return res.status(NOT_FOUND).json({
        success: false,
        message: "Blog not Found",
      });
    }

    res.status(OK).json({
      success: true,
      blog,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const { blogId } = req.params;

    const blog = await prisma.blog.findUnique({
      where: { id: parseInt(blogId) },
    });

    if (!blog) {
      throw new appError("Blog not found", BAD_REQUEST);
    }

    await prisma.blog.delete({
      where: { id: parseInt(blogId) },
    });

    res.status(OK).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
