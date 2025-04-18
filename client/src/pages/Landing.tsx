import BlogCard from "@/features/blog/BlogCard";
import mockdata from "./MockData.json";

const Landing = () => {
  return (
    <section className="w-full flex-1 flex flex-col items-center justify-center gap-4 py-4 bg-gray-800">
      {mockdata.map((blog) => (
        <BlogCard key={blog.title} {...blog} />
      ))}
    </section>
  );
};

export default Landing;
