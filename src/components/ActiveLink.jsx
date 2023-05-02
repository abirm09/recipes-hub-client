/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-red-500" : ""
        }
        style={{ borderRadius: "0" }}
      >
        {children}
      </NavLink>
    </>
  );
};

export default ActiveLink;
