import dayjs from "dayjs";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleChatOptions = ({ user }) => {
  console.log(user);

  const currentTime = dayjs().format("HH:mm"); // Format the current time

  const timeFormat = dayjs().format("A");

  return (
    <Link to={`${user._id}`}>
      <div className="px-3 py-4 flex items-center justify-between w-full gap-x-3 rounded-sm hover:bg-violet-100 cursor-pointer">
        <div className="flex gap-x-5">
          <img
            src={user?.image}
            alt={user?.name}
            className="w-[45px] rounded-[1000px]"
          />

          <div className="">
            {/* name and time  */}
            <div className="">
              <p className="font-semibold text-base">{user?.name}</p>
            </div>
            {/* messages  */}
            <div className="text-sm text-gray-500 ">
              <p>Hellow</p>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-xs text-gray-500 ">
            {currentTime} {timeFormat}
          </p>
          <p>1</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleChatOptions;
