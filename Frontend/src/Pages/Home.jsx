import {motion} from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Home() {


  return (
    <div className="h-5/6 w-full ">
      <div className="h-4/6 w-full flex flex-wrap justify-center content-center overflow-hidden">
        <motion.h2 className="text-white transform-gpu text-center w-full text-4xl font-semibold leading-8 p-5 mt-20 hover:text-5xl " 
        initial={{x:0,y:0 , opacity:0.2 ,  scale:0.1}}
        animate={{ x:0 , y: 0 , scale : 1 , opacity : 1 }}
        transition={{ duration: 3.5 , type : 'spring' , stiffness : 200 , mass:3}}
        >
            Welcome To The World's One Of The Trusted Website
        </motion.h2>
        <NavLink to="/dashboard" className="h-16 w-1/6">
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
      At PayAndBank, we understand the importance of a reliable and secure banking experience. Our platform offers a comprehensive suite of financial services designed to meet your everyday banking needs, all from the comfort of your home. Whether you’re managing your personal finances, making payments, or looking for investment opportunities, we’ve got you covered.
      </motion.div>
    </div>
  );
}
