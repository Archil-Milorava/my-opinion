import Spinner from "@/components/ui/Spinner";
import BlogCard from "@/features/blog/BlogCard";
import { usePaginatedBlogs } from "@/hooks/blogHook";
import PaginationMain from "@/layout/PaginationMain";
import { useSearchParams } from "react-router-dom";

const Landing = () => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const { blogs, totalPages, isLoading, error, isError } =
  usePaginatedBlogs(currentPage);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        {error.message}
      </div>
    );
  }

  return (
    <section className="w-full flex-1 flex flex-col items-center justify-center gap-4 py-4 bg-primary">
      {blogs?.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
      <div>
        <PaginationMain totalPages={totalPages || 1} />
      </div>
    </section>
  );
};

export default Landing;
