import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const MainLayout = () => {
  const { user } = useAuth();

  const navigate = useNavigate();
  if (!user) {
    navigate("/login");
  }
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
