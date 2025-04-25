import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/authHook";
import { Button } from "../../components/ui/button";

const UserCard = () => {
  const { currentUser } = useCurrentUser();

  return currentUser ? (
    <Card className="w-72 h-44 flex flex-col items-center">
      <CardTitle>{currentUser.nickName}</CardTitle>
      <CardDescription className="">{currentUser.email}</CardDescription>
      <CardFooter className="">
        <Button className="bg-red-700" variant={"secondary"}>
          log out
        </Button>
      </CardFooter>
    </Card>
  ) : (
    <div>Please log in first</div>
  );
};

export default UserCard;
