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

// export const getBlog = async (req, res, next) => {
//   const { blogId } = req.params;

//   try {
//     const blog = await prisma.blog.findUnique({
//       where: { id: parseInt(blogId) },
//     });

//     if (!blog) {
//       return res.status(NOT_FOUND).json({
//         success: false,
//         message: "Blog not Found",
//       });
//     }

//     res.status(OK).json({
//       success: true,
//       blog,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

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

export const getBlog = async (req, res, next) => {
  const { blogId } = req.params;
  const userAgent = req.headers["user-agent"] || "";

  // console.log(req.headers['user-agent'])

  // Function to check if it's a bot
  const isBot = (ua) => {
    const botRegex = [
      /facebookexternalhit/i,
      /Twitterbot/i,
      /Pinterest/i,
      /Slackbot/i,
      /WhatsApp/i,
      /TelegramBot/i,
      /LinkedInBot/i,
      /Googlebot/i,
    ];
    return botRegex.some((regex) => regex.test(ua));
  };

  try {
    const blog = await prisma.blog.findUnique({
      where: { id: parseInt(blogId) },
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not Found",
      });
    }

    if (isBot(userAgent)) {
      const blogUrl = `https://my-opinion-a8ly.onrender.com/blog/${blogId}`;
      const html = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${blog.title}</title>

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="${blogUrl}" />
            <meta property="twitter:site" content="${blogUrl}" />
            <meta property="twitter:title" content="${blog.title}" />
            <meta property="twitter:description" content="${blog.content.substring(0, 100)}" />
            <meta property="twitter:image" content="${blog.profileImage}" />

            <meta name="description" content="${blog.content.substring(0, 100)}" />
            <meta property="og:title" content="${blog.title}" />
            <meta property="og:description" content="${blog.content.substring(0, 100)}" />
            <meta property="og:image" content="${blog.profileImage}" />
            <meta property="og:url" content="${blogUrl}" />
            <meta property="og:type" content="article" />
          </head>
          <body>
            <p>Previewing blog for bots</p>
          </body>
        </html>
      `;
      return res.send(html);
    }

    // Normal JSON response for browsers/React app
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    next(error);
  }
};
