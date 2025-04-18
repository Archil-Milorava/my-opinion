import Spinner from "@/components/ui/Spinner";
import { useSingleBlog } from "@/hooks/blogHook";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams();
  const { blog, isLoading } = useSingleBlog(id!);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="w-full flex-1 flex flex-col gap-4 bg-gray-800 text-white py-8  px-4 md:px-[10rem]">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog?.title}</h1>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
            <span>a</span>
          </div>
          <div>
            <p className="font-medium">archil milorava</p>
            <p className="text-gray-400 text-sm">{blog?.createdAt}</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src={blog?.profileImage}
          alt={blog?.profileImage}
          className="rounded-md"
        />
      </div>
      <div>
        <p className="sm:text-2xl/relaxed text-xl/relaxed">{blog?.content}</p>
      </div>
    </section>
  );
};

export default BlogPage;
