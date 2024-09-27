
import { Link } from "react-router-dom"; // Assuming you're using a logo component

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col items-center">
        <Link to="/">
          <h1 className="text-4xl font-bold text-blue-600 animate-spin-slow">
            Infinite Ink
          </h1>
        </Link>
        <p className="text-lg text-gray-500 mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default Spinner;
