/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ChatOptions from "../../Shared/ChatOptions/ChatOptions";
import SingleChats from "../../Shared/SingleChats/SingleChats";

const Home = () => {
  return (
    <div className="flex w-full h-[710px] bg-violet-50 py-[3%] px-[5%] gap-x-5">
      <div className="w-1/4 ">
        <ChatOptions></ChatOptions>
      </div>
      <div className="w-3/4">
        <SingleChats></SingleChats>
      </div>
    </div>
  );
};

export default Home;
