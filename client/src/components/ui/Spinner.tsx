import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ClipLoader size={150} color="#000000" />
    </div>
  );
};

export default Spinner;
