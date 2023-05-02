import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import NavigationLinks from "./NavigationLinks";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <header>
      <div className="cs-container">
        <div className="navbar bg-base-100">
          <div className="navbar-start w-full">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavigationLinks />
              </ul>
            </div>
            <Link
              to="/"
              className="btn btn-ghost normal-case text-xl ml-auto lg:ml-0 font-rubik"
            >
              Recipes Hub
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-open-sans font-bold">
              <NavigationLinks />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
