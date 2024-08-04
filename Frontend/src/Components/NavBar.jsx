import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isUserState, settingAtom, userAtom } from "../Store/atom";
import Profile from "./Profile";

export default function Navbar() {

  return (
    <div>
      <div className="flex justify-between pt-4 mb-10 h-12 w-full text-slate-50 mix-blend-difference">
        <NavLink to="/">
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
        <div className="flex md:justify-between justify-end w-2/5 m-2 mr-6">
          <NavLinkComponent label={"About"} to={"/about"} />
          <NavLinkComponent label={"Contact"} to={"/contact"}/>
          <ProfileButtonComponent />
        </div>
      </div>
    </div>
  );
}

function NavLinkComponent({label ,to}){

  const linkInitial = {rotate : 360 , opacity: 0.3, y: -100 };
  const linkAnimate = {rotate: 0, opacity: 1, x: 0, y: 0 };
  const transition = {
                type: "spring",
                stiffness: 300,
                mass: 3,
                delay:0.1
              }

  return (
    <NavLink to={to} className="text-xl hidden md:block">
            <motion.button
              initial={linkInitial}
              animate={linkAnimate}
              transition={transition}
            >
              {label}
            </motion.button>
          </NavLink>
  )
}

function ProfileButtonComponent() {

  const setSetting = useSetRecoilState(settingAtom);

  const user = useRecoilValue(userAtom);
  const isUser = useRecoilValue(isUserState)

  return (
    <>
    {isUser ?
            <button onClick={()=> setSetting(true)} className="text-xl text-bold w-auto">
            <Profile user={user} />
          </button>
           : 
          <>
          <NavLinkComponent label={"Sign Up"} to={"/signup"} />
          <NavLinkComponent label={"Log In"} to={"/signin"}/>
          </>
          }
    </>
  )
}