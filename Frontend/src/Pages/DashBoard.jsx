import { useEffect } from "react"
import { Users } from "../Components/User"
import { useRecoilValue } from "recoil"
import { isUserState} from "../Store/atom"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"

export default function DashBoard() {

  const navigate = useNavigate();
  const isUser = useRecoilValue(isUserState);

  useEffect(()=>{
    if(isUser){
      toast.success("Welcome User");
      return ;
    }
    navigate('/');
    toast.error("User not Logged In")
  } , [isUser] )

  return (
    <>
    <Toaster />
    <div className="text-white">
      <div className=" text-xl px-5 flex flex-wrap justify-between w-full">
        <p>User</p>
        <p className="font-semibold">Your Balance : ₹ <span className="font-extralight">6000</span></p>
      </div>
      <Users />
    </div>
    </>
    
  )
}
