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

export const shareBlog = async (req, res, next) => {
  const { blogId } = req.params;
  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: parseInt(blogId),
      },
    });

    if (!blog) {
      throw new appError("Blog not Found", BAD_REQUEST);
    }

    const { title, content, profileImage } = blog;

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="${content.slice(0, 160)}" />

      <meta property="og:type" content="article" />
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${content.slice(0, 160)}" />
      <meta property="og:image" content="${profileImage}" />
      <meta property="og:url" content="${req.protocol}://${req.get("host")}/api/v1/blog/share/${blogId}" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${title}" />
      <meta name="twitter:description" content="${content.slice(0, 160)}" />
      <meta name="twitter:image" content="${profileImage}" />

      <title>${title}</title>
    </head>
    <body>
      <h1>${title}</h1>
      <p>${content}</p>
      <img src="${profileImage}" alt="${title}" style="max-width: 100%;" />
    </body>
    </html>
  `;

    res.send(html);
  } catch (error) {
    next(error);
  }
};
