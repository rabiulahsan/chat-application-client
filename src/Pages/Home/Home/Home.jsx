/* eslint-disable no-unused-vars */
import { Link, Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Home = () => {
  const { user, logOut } = useAuth();

  //logout
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div>
      This is home page of {user?.displayName}
      {user ? (
        <Link
          onClick={handleLogout}
          to="/login"
          className="bg-blue-600 font-semibold text-lg text-white py-2 px-6 mb-5 rounded cursor-pointer hover:bg-blue-800 duration-500"
        >
          Log Out
        </Link>
      ) : (
        <Link
          to="/login"
          className="bg-blue-600 font-semibold text-lg text-white py-2 px-6 mb-5 rounded cursor-pointer hover:bg-blue-800 duration-500"
        >
          login
        </Link>
      )}
    </div>
  );
};

export default Home;
