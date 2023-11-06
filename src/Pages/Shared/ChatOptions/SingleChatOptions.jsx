import dayjs from "dayjs";

/* eslint-disable react/prop-types */
const SingleChatOptions = ({ user }) => {
  console.log(user);

  const currentTime = dayjs().format("HH:mm"); // Format the current time

  return (
    <div className="px-3 py-4 flex items-center w-full gap-x-3 rounded-sm hover:bg-violet-100">
      <img
        src={user?.image}
        alt={user?.name}
        className="w-[40px] rounded-[1000px]"
      />

      <div className="">
        {/* name and time  */}
        <div className="flex w-full items-center gap-x-5">
          <div className="">
            <p className="font-semibold text-base">{user?.name}</p>
          </div>
          <div className="">
            <p className="text-xs text-gray-500 ">{currentTime}</p>
          </div>
        </div>

        {/* messages  */}
        <div className="text-sm text-gray-500 ">
          <p>Hellow</p>
        </div>
      </div>
    </div>
  );
};

export default SingleChatOptions;
