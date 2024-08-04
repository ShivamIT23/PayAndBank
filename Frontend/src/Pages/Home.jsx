import {motion} from "framer-motion";
import { NavLink } from "react-router-dom";
import { description1 } from "../../lib/data";
import { useRecoilValue } from "recoil";
import { isUserState } from "../Store/atom";

export default function Home() {

  const isUser = useRecoilValue(isUserState);

  return (
    <div className="h-5/6 w-full overflow-hidden ">
      <div className="h-4/6 w-full flex flex-wrap justify-center content-center">
        <motion.h2 className="text-white transform-gpu text-center w-full text-4xl font-semibold leading-8 p-5 mt-20 hover:text-5xl " 
        initial={{x:0,y:0 , opacity:0.2 ,  scale:0.1}}
        animate={{ x:0 , y: 0 , scale : 1 , opacity : 1 }}
        transition={{ duration: 3.5 , type : 'spring' , stiffness : 200 , mass:3}}
        >
            Welcome To The World's One Of The Trusted Website
        </motion.h2>
        <NavLink to={isUser ? "/dashboard" : "/signin"} className="h-16 w-1/6">
          <motion.p  className=" h-full w-full text-center flex flex-col justify-center transform-gpu font-semibold text-lg text-olaola bg-slate-50 rounded-lg hover:bg-olaola hover:text-slate-50" 
        initial={{x:-10000 , y:0, scale:0.1 , opacity:0.2}}
        animate={{x:0 , y: 35 , scale:1 , opacity:1}}
        transition={{delay:0.5, duration: 1 , type : 'spring' , stiffness : 150 , mass:2}}
        >
          Get Started
        </motion.p>
        </NavLink>
      </div>
      <motion.div className="text-slate-50 flex flex-wrap text-center p-4 text-lg leading-10 font-medium "
      initial={{y:1000 , opacity:0.2 , scale:0.5 , textAlign:"start"}}
      animate={{y:0 , opacity:1 , scale:1 , textAlign:"center"}}
      transition={{duration:2}}
      >
      {description1}
      </motion.div>
    </div>
  );
}
