import { useRecoilState } from "recoil"
import { balanceState } from "../Store/atom"
import { useEffect } from "react";
import { getBalance } from "../../lib/helper";
import toast from "react-hot-toast";

export default function Balance() {

    const [balance , setBalance] = useRecoilState(balanceState);

    useEffect(()=>{
        getBalance().then(res => {
            setBalance(res);
            (res == 0) ? toast.error("Issue when fetching balance") : null
        }); 
        const IntervalID = setInterval(async () => {
          const newBalance = await getBalance();
            setBalance(newBalance);
            (newBalance == 0) ? toast.error("Issue when fetching balance") : null
          }, 5000);
          return () =>{
            clearInterval(IntervalID);
          }
    },[])

  return (
    <>
    <p className="font-semibold">Your Balance : ₹ <span className="font-extralight">{balance}</span></p>
    </>
  )
}
