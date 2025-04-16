import ClipLoader from "react-spinners/ClipLoader";

const SpinnerMini = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ClipLoader size={15} color="#f6f6f6" />
    </div>
  );
};

export default SpinnerMini;
