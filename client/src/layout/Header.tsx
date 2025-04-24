import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      onClick={() => navigate("/")}
      className=" w-full h-14 sm:h-32 transition-all flex items-center justify-center cursor-pointer bg-primary text-secondary "
    >
      <h1 className="font-bold tracking-wider uppercase text-4xl sm:text-9xl ">
        Myopinion
      </h1>
    </header>
  );
};

export default Header;
