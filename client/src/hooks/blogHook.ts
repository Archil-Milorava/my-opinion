import { getBlogs, getSingleBlog } from "@/services/apiBlog";
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
