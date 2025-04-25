import API from "@/config/axiosConfig";
import { Blog } from "./types";

interface BlogInterface {
  success: boolean;
  count: number;
  blogs: Blog[];
}

interface SingleBlog {
  success: boolean;
  blog: Blog;
}

interface PaginationBlog {
  blogs: Blog[];
  totalBlogsCount: number;
  totalPages: number;
}

export const getSingleBlog = async (id: string): Promise<SingleBlog> =>
  API.get(`/api/v1/blog/${id}`);

export const getBlogs = async (): Promise<BlogInterface> =>
  API.get("/api/v1/blog/all");

export const getPaginatedBlogs = async (
  page: number
): Promise<PaginationBlog> => API.get(`/api/v1/blog/pages?page=${page}`);
