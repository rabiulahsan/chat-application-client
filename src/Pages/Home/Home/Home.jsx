/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import useAuth from "../../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <motion.div className="">
      <motion.div className="my-[4%]">
        <motion.span
          animate={{ x: 0, opacity: 1, scale: 0.4 }}
          initial={{ x: 300, opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Player
            className="h-[400px]"
            autoplay
            loop
            src="/about-us.json"
          ></Player>
        </motion.span>
      </motion.div>
      <p className="text-4xl text-violet-600 font-bold text-center">
        Welcome {user?.displayName}
      </p>
    </motion.div>
  );
};

export default Home;
