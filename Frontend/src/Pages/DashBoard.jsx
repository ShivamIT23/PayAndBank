import { useEffect, useState } from "react";
import { Users } from "../Components/User";
import { useRecoilValue } from "recoil";
import { isUserState, userAtom } from "../Store/atom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Balance from "../Components/Balance";
import Input from "../Components/Input";
import RoundedIcon from "../Components/RoundedIcon";
import Button from "../Components/Button";

export default function DashBoard() {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);
  const isUser = useRecoilValue(isUserState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    if (!isUser) {
      toast.error("User not Logged In", {
        duration: 1000,
      });
    } else {
      setLoading(false);
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [isUser, navigate]);

  return (
    <>
      {loading ? (
        <div className="text-white">
          <div className=" text-xl px-5 flex flex-wrap justify-between w-full">
            <p>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
            </p>
            <p className="font-semibold">
              Your Balance : ₹ <span className="font-extralight">000.00</span>
            </p>
          </div>
          <div className="m-5 w-auto h-3/6 text-cyan-800">
            <Input placeholder={" "} />
          </div>
          <div>
            <div className="flex justify-between mx-5">
              <div className="flex">
                <RoundedIcon symbol={" "} />
                <div className="flex flex-col justify-center h-ful">
                  <div>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center h-ful">
                <Button onClick={() => toast("Wait...")} label={"Send Money"} />
              </div>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
}
