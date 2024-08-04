import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { messageState } from "../../Store/atom";

export default function TextBox({label , placeholder}) {

  const [message , setMessage] = useRecoilState(messageState);

  return (
    <>
    <motion.p className="my-3 pl-2"
      initial={{x:-1000 , opacity:0 , scale:0.5}}
      animate={{x:0 , opacity:1 , scale:1 }}
      transition={{duration:0.5 , delay:0.5}}
      >{label} : </motion.p>
      <motion.textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      rows="4"
      initial={{x:1000 , opacity:0 , scale:0.5}}
      animate={{x:0 , opacity:1 , scale:1 }}
      transition={{duration:1 , delay:0}}
        className=" w-full px-3 py-1"
        placeholder={placeholder}
      />
    </>
  )
}
