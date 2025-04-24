import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blog } from "@/services/types";
import { formatDate, readTime } from "@/utils/helpers";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ title, content, createdAt, profileImage, id }: Blog) => {
  const navigate = useNavigate();

  
  return (
    <Card
      onClick={() => navigate(`/blog/${id}`)}
      className=" min-h-96 w-[28rem] sm:w-auto max-w-[60rem] cursor-pointer rounded-sm"
    >
      <CardHeader>
        <CardTitle className="text-4xl h-auto  py-4 font-bold overflow-hidden">
          {title.substring(0, 100)}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex gap-1 h- overflow-hidden ">
        <CardDescription className="text-black sm:text-base">
          {content.substring(0, 490) + "..."}
        </CardDescription>
        <img src={profileImage} className="h-16 rounded-sm" />
      </CardContent>
      <CardFooter className="text-sm  flex justify-around text-gray-700 font-semibold">
        <p> {formatDate(createdAt)}</p>
        <p>{readTime(content)}</p>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
