import { useEffect } from "react"
import { Users } from "../Components/User"
import { useRecoilValue } from "recoil"
import { isUserState, userAtom} from "../Store/atom"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
import Balance from "../Components/Balance"

export default function DashBoard() {

  const navigate = useNavigate();
  const isUser = useRecoilValue(isUserState);
  const user = useRecoilValue(userAtom);

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
        <p>{user.firstName + " " + user.lastName}</p>
        <Balance />
      </div>
      <Users />
    </div>
    </>
    
  )
}
