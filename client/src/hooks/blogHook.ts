import { getBlogs, getPaginatedBlogs, getSingleBlog } from "@/services/apiBlog";
import { useQuery } from "@tanstack/react-query";

export const useGetBlogs = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    staleTime: 3600000,
  });

  const blogs = data?.blogs;

  return { blogs, ...rest };
};

export const useSingleBlog = (id: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getSingleBlog(id),
    staleTime: Infinity,
  });

  const blog = data?.blog;

  return { blog, ...rest };
};

export const usePaginatedBlogs = (currentPage: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ["paginatedBlog", currentPage],
    queryFn: () => getPaginatedBlogs(currentPage),
    staleTime: Infinity,
  });

  const blogs = data?.blogs;
  const totalPages = data?.totalPages;
  const totalBlogsCount = data?.totalBlogsCount;

  return { data, blogs, totalPages, totalBlogsCount, ...rest };
};
