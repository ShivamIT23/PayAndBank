import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const linkInitial = { opacity: 0.3, y: -100 };
  const linkAnimate = { opacity: 1, x: 0, y: 0 };

  return (
    <div>
      <div className="flex justify-between mt-4 h-12 w-full text-slate-50">
        <NavLink to="/" >
        <motion.h1
          className=" ml-2 font-bold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, scale: 1.6, x: 40, y: 20 }}
          transition={{
            type: "tween",
            duration: 2,
            ease: [0.27, 0.47, 0.63, 0.87],
          }}
        >
          PayAndBank
        </motion.h1>
        </NavLink>
        <div className="flex justify-between w-2/5 m-2 mr-6">
          <NavLink to="/signup" className="text-xl">
            <motion.button
              initial={linkInitial}
              animate={linkAnimate}
              transition={{
                type: "spring",
                stiffness: 300,
                mass: 3,
                delay: 0.1,
              }}
            >
              Sign Up
            </motion.button>
          </NavLink>
          <NavLink to="/signin" className="text-xl">
            <motion.button
              initial={linkInitial}
              animate={linkAnimate}
              transition={{
                type: "spring",
                stiffness: 300,
                mass: 3,
                delay: 0.3,
              }}
            >
              Log In
            </motion.button>
          </NavLink>
          <NavLink to="/about" className="text-xl">
            <motion.button
              initial={linkInitial}
              animate={linkAnimate}
              transition={{
                type: "spring",
                stiffness: 300,
                mass: 3,
                delay: 0.5,
              }}
            >
              About
            </motion.button>
          </NavLink>
          <NavLink to="/contact" className="text-xl">
            <motion.button
              initial={{ opacity: 0.3, y: -100 }}
              animate={linkAnimate}
              transition={{
                type: "spring",
                stiffness: 300,
                mass: 3.6,
                delay: 0.7,
              }}
            >
              Contact
            </motion.button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
