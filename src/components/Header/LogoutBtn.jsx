import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="px-4 py-2 bg-white text-purple-500 font-semibold hover:bg-gray-100 hover:shadow-lg transition-colors duration-300 rounded-full shadow-md"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
