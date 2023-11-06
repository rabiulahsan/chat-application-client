/* eslint-disable react/prop-types */
import { BsThreeDots, BsCameraVideoFill } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";

const ChatHeader = ({ user }) => {
  return (
    <div className="flex items-center justify-between bg-white py-5 px-[5%] rounded-md">
      <div className="flex items-center gap-x-5">
        <img
          src={user?.image}
          alt={user?.name}
          className="w-[45px] rounded-[1000px]"
        />
        <div className="">
          <p className="font-semibold text-lg">{user?.name}</p>
          <p className="text-sm text-gray-600 mt-[-5px]">online</p>
        </div>
      </div>
      <div className="flex gap-x-4 text-xl text-violet-600">
        <span>
          <BsCameraVideoFill></BsCameraVideoFill>
        </span>
        <span>
          <IoIosCall></IoIosCall>
        </span>
        <span>
          <BsThreeDots></BsThreeDots>
        </span>
      </div>
    </div>
  );
};

export default ChatHeader;
