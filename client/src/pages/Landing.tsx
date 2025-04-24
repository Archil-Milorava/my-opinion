import Spinner from "@/components/ui/Spinner";
import BlogCard from "@/features/blog/BlogCard";
import { useGetBlogs } from "@/hooks/blogHook";

const Landing = () => {
  const { blogs, isLoading, error } = useGetBlogs();
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="w-full flex-1 flex flex-col items-center justify-center gap-4 py-4 bg-primary">
      {error && <div>error</div>}
      {blogs?.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </section>
  );
};

export default Landing;
