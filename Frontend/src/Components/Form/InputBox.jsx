import { motion } from "framer-motion";
import Input from "../Input";

export default function InputBox({label ,type  }) {

  return (
    <>
      <motion.p className="my-3 pl-2"
      initial={{x:-1000 , opacity:0 , scale:0.5}}
      animate={{x:0 , opacity:1 , scale:1 }}
      transition={{duration:0.5 , delay:0.5}}
      >{label} : </motion.p>
      <Input placeholder={label} type={type}/>
    </>
  );
}
