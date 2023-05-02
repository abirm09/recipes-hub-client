import { useContext } from "react";
import ActiveLink from "../../ActiveLink";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import emptyUSer from "../../../assets/others/empty-user.jpg";
const NavigationLinks = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/blog">Blog</ActiveLink>
      </li>
      {user ? (
        <>
          <li
            className="tooltip tooltip-bottom p-0 mt-5 lg:mt-0"
            data-tip={user?.displayName}
          >
            <img
              src={user?.photoURL ? user?.photoURL : emptyUSer}
              alt="User"
              className="w-14 p-0 ml-5"
              style={{ borderRadius: "30px" }}
            />
          </li>
        </>
      ) : (
        <li className="mx-auto mt-5 lg:mt-0">
          <Link to="/login" className="bg-gray-700 text-white ml-0 lg:ml-5">
            Log in
          </Link>
        </li>
      )}
    </>
  );
};

export default NavigationLinks;
