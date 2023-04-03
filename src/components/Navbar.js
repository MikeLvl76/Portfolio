import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <FaHome
            className="bg-white border border-1 rounded-full px-2 py-2"
            color="teal"
            size={50}
          />
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            to="/about"
          >
            About
          </Link>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            to="/careers"
          >
            Careers
          </Link>
        </div>
      </div>
    </nav>
  );
}
