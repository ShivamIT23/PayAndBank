import {motion} from "framer-motion"
import Button from "../Button"

export default function ButtonForm({label}) {
  return (
    <motion.div className="flex justify-center text-3xl"
    initial={{x:0 ,y:0, scale :0.20 , opacity:0.2}}
    animate={{x:0,y:0 ,scale:1 , opacity:1}}
    transition={{duration:2 , type:'spring' , stiffness:180 , mass:1.2}}
    >
    <Button label={label} />
    </motion.div>
  )
}
