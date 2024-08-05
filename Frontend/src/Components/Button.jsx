import { motion } from "framer-motion";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { formDataState, tokenState } from "../Store/atom";
import { useNavigate } from "react-router-dom";
import { onClickHandler } from "../../lib/helper";
import {Toaster} from "react-hot-toast"

export default function Button({label ,onClick}) {
  
  const navigate = useNavigate();
  const setToken = useSetRecoilState(tokenState);

  const data = useRecoilValue(formDataState(label))

  return (
    <>
    <Toaster />
    <motion.button onClick={onClick ? onClick : () => onClickHandler(label,data ,navigate ,setToken )} className="bg-slate-50 rounded-xl border-4 p-2 font-semibold  border-cyan-800 w-full text-cyan-800 hover:text-slate-50 hover:bg-cyan-800 "
    initial={{opacity:0}}
    animate={{opacity:1 , transition:{duration : 2}}}
    >
      {label}
    </motion.button>
    </>
    
  );
}
