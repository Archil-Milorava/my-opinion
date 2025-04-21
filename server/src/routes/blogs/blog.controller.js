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
  const userAgent = req.get("User-Agent") || "";
  const isBot =
    /bot|crawl|slurp|facebook|twitter|discord|whatsapp|preview/i.test(
      userAgent
    );

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

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${blog.title}</title>
      <meta property="og:title" content="${blog.title}" />
      <meta property="og:description" content="${blog.content.slice(0, 150)}..." />
      <meta property="og:image" content="${blog.profileImage}" />
      <meta property="og:url" content="https://yourdomain.com/blog/${blogId}" />
      
        {/* twittr */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="${window.location.href}" />
        <meta property="twitter:site" content="${window.location.href}" />
        <meta property="twitter:title" content="${blog.title}" />
        <meta property="twitter:description" content="${blog.content.slice(0, 150)}..." />
        <meta property="twitter:image" content="${blog.profileImage}" />


    </head>
    <body>
      <p>Redirecting...</p>
      <script>window.location.href = "${window.location.origin}/api/v1/blog/${blogId}";</script>
    </body>
    </html>
  `;

    if (isBot) {
      return res.status(OK).send(html);
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
