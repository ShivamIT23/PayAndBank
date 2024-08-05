import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { amountState, sufficientAmountState } from "../Store/atom";
import Heading from "../Components/Form/Heading";
import SubHeading from "../Components/Form/SubHeading";
import InputBox from "../Components/Form/InputBox";
import Button from "../Components/Button";
import { transferHandler } from "../../lib/helper";
import Question from "../Components/Form/Question";
import { useEffect } from "react";

export default function SendMoney() {

  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const id = searchParams.get("id");
  const [amount , setAmount] = useRecoilState(amountState);
  const sufficientAmount = useRecoilValue(sufficientAmountState);
  const navigate = useNavigate();

  useEffect(()=>{
    setAmount(0);
  },[])

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-slate-50 shadow-lg rounded-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <Heading heading={"Send Money"} />
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-2">
              <div className="text-green-200 ">
                  <SubHeading paragraph={"To : "} />
              </div>
              <SubHeading paragraph={name} />
            </div>
            <div className="space-y-4  mt-10">
              <div className="space-y-2">
                <InputBox label={"Amount (in Rs)"} placeholder={"Enter amount"} />
              </div>
              <Button label={"Initiate Transfer"} onClick={() => transferHandler(amount,id,navigate)}/>
                {sufficientAmount ? null : <Question label={"Insufficient Balance?"} to={"/dashboard"} toLabel={"CheckBalance"} textSize={'text-lg'} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

