import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blog } from "@/services/types";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ title, content, createdAt, profileImage, id }: Blog) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/blog/${id}`)}
      className="w-96 sm:w-[60rem] h-80 overflow-hidden  bg-amber-400 hover:opacity-90 cursor-pointer transition-all border-none shadow-none rounded-sm"
    >
      <CardHeader>
        <CardTitle className="text-4xl h-24 font-bold overflow-hidden">
          {title.substring(0, 100)}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex gap-1 h- overflow-hidden">
        <CardDescription className="text-black sm:text-base">
          {content.substring(0, 490) + "..."}
        </CardDescription>
        <img src={profileImage} className="h-16 rounded-sm" />
      </CardContent>
      <CardFooter className="text-sm  flex justify-around text-gray-500">
        <p> {createdAt}</p>
        <p>1 min read</p>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
