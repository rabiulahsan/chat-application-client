import { AiOutlineLogout } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";

const ChatOptions = () => {
  const { user, logOut } = useAuth();

  //logout
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-white p-[5%] shadow-md rounded">
      {/* users details  */}
      <div className="flex items-center justify-between">
        <div className="flex gap-x-5 items-center">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-[50px]"
          />
          <p className="font-semibold text-xl">{user?.displayName}</p>
        </div>
        <div className="">
          <span
            className="cursor-pointer text-2xl text-violet-600 font-bold"
            onClick={handleLogout}
          >
            <AiOutlineLogout></AiOutlineLogout>
          </span>
        </div>
      </div>
      <hr className="my-5" />

      {/* users all chats  */}
      <p className="font-semibold text-lg text-gray-500 text-center mb-5">
        All Chats
      </p>

      {/* all users  */}
      <div className=""></div>
    </div>
  );
};

export default ChatOptions;
