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
      {!user ? (
        <>
          <li className="tooltip tooltip-bottom p-0" data-tip="hello">
            <img
              src={user?.photoURL ? user?.photoURL : emptyUSer}
              alt="User"
              className="w-14 rounded-full p-0 ml-5"
            />
          </li>
        </>
      ) : (
        <li>
          <Link to="/login" className="bg-gray-700 text-white ml-5">
            Log in
          </Link>
        </li>
      )}
    </>
  );
};

export default NavigationLinks;
