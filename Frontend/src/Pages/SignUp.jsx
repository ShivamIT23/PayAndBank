import Heading from "../Components/Form/Heading";
import InputBox from "../Components/Form/InputBox";
import Question from "../Components/Form/Question";
import Password from "../Components/Form/Password";
import SubHeading from "../Components/Form/SubHeading";
import ButtonForm from "../Components/Form/ButtonForm";
import { useRecoilValue } from "recoil";
import { isUserState } from "../Store/atom";

export default function SignUp() {
  const isUser = useRecoilValue(isUserState);
  return (
    <div className="h-full lg:h-5/6 xl:h-4/6 m-6 flex justify-center">
      <div className="h-full w-5/6 flex flex-wrap content-center justify-center">
        <div className="h-auto w-full py-10 bg-slate-50 p-4 text-cyan-800 text-lg md:text-3xl sm:text-xl">
          <Heading
            heading={isUser ? "Want A New ACCOUNT?" : "New Here?"}
          />
          <SubHeading  paragraph={`Enter Your Information To Create An  
          ${isUser ? "New Account" : "Account"}`} />
          <div className="grid grid-cols-12 my-6">
            <div className="col-span-6 pr-2">
            <InputBox label={"FirstName"} />
            </div>
            <div className="col-span-6">
            <InputBox label={"LastName"}/>
            </div>
            <div className="col-span-12 pt-3">
            <InputBox label={"Email"} type="email"/>
            </div>
            <div className="relative col-span-12 py-3">
              <Password />
            </div>
          </div>
          <ButtonForm label={"Register"} />
          <div className="flex justify-center text-orange-700">
            <Question label={"Already have an account?"} to={"/signin"} toLabel={"Login"} />
          </div>
        </div>
      </div>
    </div>
  );
}
