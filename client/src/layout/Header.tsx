import { AvatarFallback } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/authHook";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = useCurrentUser();

  return (
    <header className="w-full h-14 sm:h-32 transition-all flex items-center justify-between px-4 bg-primary text-secondary relative">
      <div
        onClick={() => navigate("/")}
        className="flex-1 flex justify-center cursor-pointer"
      >
        <h1 className="font-bold tracking-wider uppercase text-4xl sm:text-9xl">
          Myopinion
        </h1>
      </div>

      {currentUser && (
        <div className="relative">
          <Avatar
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="cursor-pointer"
          >
            <AvatarImage
              className="h-10 w-10 rounded-full overflow-hidden"
              src={
                currentUser.profileImage ||
                "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="profileImage"
            />
            <AvatarFallback>
              {currentUser.nickName.substring(0, 1).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
      )}
    </header>
  );
};

export default Header;
