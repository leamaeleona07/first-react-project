import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center">
      <HashLoader color="#da6ad5" speedMultiplier={2} />
    </div>
  );
};

export default Loader;
