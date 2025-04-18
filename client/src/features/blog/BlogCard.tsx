import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface Blog {
  title: string;
  content: string;
  published: string;
  image: string;
}

const BlogCard = ({ title, content, published, image }: Blog) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/blog/${title}`)}
      className="w-96 sm:w-[60rem] h-80 overflow-hidden  bg-amber-400 hover:opacity-90 cursor-pointer transition-all border-none shadow-none rounded-sm"
    >
      <CardHeader>
        <CardTitle className="text-4xl h-20  font-bold overflow-hidden">
          {title.substring(0, 100)}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex gap-1 h-40 overflow-hidden">
        <CardDescription className="text-black sm:text-base">
          {content.substring(0, 490) + "..."}
        </CardDescription>
        <img src={image} className="h-16 rounded-sm" />
      </CardContent>
      <CardFooter className="text-sm  flex justify-around text-gray-500">
        <p> {published}</p>
        <p>1 min read</p>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
