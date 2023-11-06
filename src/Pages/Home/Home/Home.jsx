/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ChatOptions from "../../Shared/ChatOptions/ChatOptions";
import SingleChats from "../../Shared/SingleChats/SingleChats";

const Home = () => {
  return (
    <div className="flex w-full h-screen bg-violet-50 py-[3%] px-[5%] gap-x-6">
      <div className="w-1/3 ">
        <ChatOptions></ChatOptions>
      </div>
      <div className="w-2/3">
        <SingleChats></SingleChats>
      </div>
    </div>
  );
};

export default Home;
