import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import GoogleSignin from "../Shared/GoogleSignin/GoogleSignin";
import { Player } from "@lottiefiles/react-lottie-player";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onsubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Login Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <div className="flex justify-center items-center bg-[#ebeaf8] h-[710px] ">
        <motion.div className=" w-1/4 h-[460px] bg-white mb-4  flex justify-center items-center text-white text-center shadow-md rounded">
          <motion.span
            className=""
            animate={{ y: 0, opacity: 1, scale: 1 }}
            initial={{ y: -300, opacity: 0, scale: 0.2 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Player
              className="w-[80%]"
              autoplay
              loop
              src="/login.json"
            ></Player>
          </motion.span>
        </motion.div>
        <div className="bg-white shadow-md rounded px-10 pt-8 pb-8 mb-4 w-1/4">
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="form-control mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", { required: true })}
                placeholder="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.password && (
                <span className="text-red-600">Password required</span>
              )}
            </div>

            <div className="form-control cursor-pointer text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <input className=" cursor-pointer " type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center text-gray-400 my-5">or</p>
          <div className="my-5">
            <GoogleSignin></GoogleSignin>
          </div>
          <p className="flex flex-col text-center text-gray-500">
            Don&apos;t have an account?
            <Link to={"/signup"}>
              <span className="text-blue-800 font-semibold hover:underline">
                Register
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
