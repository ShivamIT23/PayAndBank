import { useRecoilState } from "recoil"
import { balanceState } from "../Store/atom"
import { useEffect } from "react";
import { getBalance } from "../../lib/helper";

export default function Balance() {

    const [balance , setBalance] = useRecoilState(balanceState);

    useEffect(()=>{
        const IntervalID = setInterval(async () => {
            setBalance(await getBalance());
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
