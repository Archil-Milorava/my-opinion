import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      onClick={() => navigate("/")}
      className="bg-yellow-300 w-full h-14 sm:h-32 transition-all flex items-center justify-center cursor-pointer"
    >
      <h1 className="font-bold tracking-wider uppercase text-xl sm:text-9xl ">
        Myopinion
      </h1>
    </header>
  );
};

export default Header;
