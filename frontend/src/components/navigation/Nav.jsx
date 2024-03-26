import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { toast } from "react-toastify";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4">
      {user ? (
        <>
          <NavLink
            className="text-white mr-4 hover:bg-gray-700 px-3 py-1 rounded"
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            className="text-white mr-4 hover:bg-gray-700 px-3 py-1 rounded"
            to="/"
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink className="text-white text-xl font-bold" to="/">
            Logo
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Nav;
