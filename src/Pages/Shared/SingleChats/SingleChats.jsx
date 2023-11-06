import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatHeader from "./ChatHeader";
import { BsFillSendFill } from "react-icons/bs";

const SingleChats = () => {
  const [user, setUser] = useState([]);

  const id = useParams().id;

  console.log(id);
  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [id]);

  return (
    <div className="bg-violet-100 h-[100%] shadow-md rounded-md relative overflow-y-auto">
      <ChatHeader user={user}></ChatHeader>

      <div className="flex gap-x-5 justify-center items-center absolute  bottom-[3%] w-full px-[5%]">
        <input
          type="text"
          placeholder="Type a message...."
          className="bg-white px-5 py-4 w-3/5 rounded-lg focus:outline-none"
        />
        <span className="text-white font-bold text-xl cursor-pointer bg-violet-600 p-4 rounded-md">
          <BsFillSendFill></BsFillSendFill>
        </span>
      </div>
    </div>
  );
};

export default SingleChats;
