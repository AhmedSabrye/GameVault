import { Link } from "react-router";
import notFound from "../assets/404.svg";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center w-1/2 flex flex-col items-center justify-center gap-4">
        <img src={notFound} alt="404" className="w-full h-full object-cover" />
        <Link
          to="/"
          className="text-blue-500 bg-white hover:bg-gray-200 px-4 py-2 rounded-md hover:text-blue-700"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
