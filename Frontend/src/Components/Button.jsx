import { motion } from "framer-motion";

export default function Button({label , onClick}) {
  return (
    <motion.button onClick={onClick} className="bg-slate-50 rounded-xl border-4 p-2 font-semibold  border-cyan-800 w-full text-cyan-800 hover:text-slate-50 hover:bg-cyan-800 "
    initial={{opacity:0}}
    animate={{opacity:1 , transition:{duration : 2}}}
    >
      {label}
    </motion.button>
  );
}
