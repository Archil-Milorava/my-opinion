import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-5xl font-bold tracking-wide">PAGE not FOUND </h1>
      <Button type="button" variant={"link"} size={"lg"} onClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
};

export default NotFound;
