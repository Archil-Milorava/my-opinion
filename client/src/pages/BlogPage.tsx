import Spinner from "@/components/ui/Spinner";
import BlogShare from "@/features/blog/BlogShare";
import { useSingleBlog } from "@/hooks/blogHook";
import { useParams } from "react-router-dom";
import ErrorPage from "./Error";
import { Helmet } from "react-helmet-async";

const BlogPage = () => {
  const { id } = useParams();
  const { blog, isLoading, error } = useSingleBlog(id!);

  console.log(blog);
  

  if (isLoading) {
    return <Spinner />;
  }

  if (!blog) {
    return <ErrorPage errorMessage={error?.message || "Blog not found"} />;
  }

  const { title, content, createdAt, profileImage } = blog || {};

  return (
    <>
      <Helmet>
        <title>{title}</title>
      <meta name="description" content="my name is achi" />

      </Helmet>

      <section className="w-full flex-1 flex flex-col gap-4 bg-gray-800 text-white py-8  px-4 md:px-[10rem]">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
              <span>a</span>
            </div>
            <div>
              <p className="font-medium">archil milorava</p>
              <p className="text-gray-400 text-sm">{createdAt}</p>
            </div>
          </div>
        </div>
        <div>
          <img src={profileImage} alt={profileImage} className="rounded-md" />
        </div>
        <div>
          <p className="sm:text-2xl/relaxed text-xl/relaxed">{content}</p>
        </div>
        <BlogShare title={title}  />
      </section>
    </>
  );
};

export default BlogPage;


