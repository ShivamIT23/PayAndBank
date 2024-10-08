import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Question({ label, to, toLabel ,textSize }) {
  return (
    <>
      <motion.p className={`${textSize ? textSize : "text-2xl"} mt-2`}
      initial={{scale:0.2 , y:1000}}
      animate={{scale:1, y:0 , transition:{duration:0.5}}}
      >
        {label}{" "}
        <Link
          to={to}
          className={`font-bold text-orange-600 ${textSize ? 'hover:text-xl' : 'hover:text-3xl'} hover:text-cyan-400`}
        >
          {toLabel}
        </Link>
      </motion.p>
    </>
  );
}
