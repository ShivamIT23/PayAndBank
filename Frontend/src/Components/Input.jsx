import { motion } from "framer-motion";


export default function Input({type , placeholder }) {
  return (
    <>
    <motion.input
      initial={{x:1000 , opacity:0 , scale:0.5}}
      animate={{x:0 , opacity:1 , scale:1 }}
      transition={{duration:1 , delay:0}}
        className=" w-full px-3 py-1"
        type={type ? type : "text"}
        placeholder={placeholder}
      />
    </>
  )
}
