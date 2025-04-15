import express from "express";
import "dotenv/config";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/user/user.routes.js";
import blogRoutes from "./routes/blogs/blog.routes.js";

const app = express();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? "http://localhost:5173"
        : undefined,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/../client/dist/index.html"))
);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
