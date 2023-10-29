import ErrorPage from "../Components/ErrorPage";
import SigninLayout from "../Layout/SigninLayout/SigninLayout";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },

  //   layout for login page
  {
    path: "/login",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
  },

  // layout for signup page
  {
    path: "/signup",
    element: <SigninLayout></SigninLayout>,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
