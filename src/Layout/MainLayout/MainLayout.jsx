import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ChatOptions from "../../Pages/Shared/ChatOptions/ChatOptions";

const MainLayout = () => {
  const { user } = useAuth();

  const navigate = useNavigate();
  if (!user) {
    navigate("/login");
  }
  return (
    <div className="flex w-full h-screen bg-violet-50 py-[3%] px-[5%] gap-x-6">
      <div className="w-1/3 ">
        <ChatOptions></ChatOptions>
      </div>
      <div className="w-2/3">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
