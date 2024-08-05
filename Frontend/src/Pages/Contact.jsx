import Heading from "../Components/Form/Heading";
import InputBox from "../Components/Form/InputBox";
import Question from "../Components/Form/Question";
import SubHeading from "../Components/Form/SubHeading";
import ButtonForm from "../Components/Form/ButtonForm";
import TextBox from "../Components/Form/TextBox";

export default function Contact() {
  return (
    <div className="h-full pt-28 lg:h-5/6 xl:h-4/6 m-6 flex justify-center">
      <div className="h-full w-5/6 flex flex-wrap content-center justify-center">
        <div className="h-auto w-full py-10 bg-slate-50 p-4 text-cyan-800 text-lg md:text-3xl sm:text-xl">
          <Heading
            heading={"Contact Us"}
          />
          <SubHeading  paragraph={"What's the issue ?"} />
          <div className="grid grid-cols-12 my-6">
            <div className="col-span-12 pr-2">
            <InputBox label={"Full Name"} />
            </div>
            <div className="col-span-12 pt-3">
            <InputBox label={"Email"} type="email"/>
            </div>
            <div className="relative col-span-12 py-3">
              <TextBox label={"Message"} placeholder={"Thank You!"} />
            </div>
          </div>
          <ButtonForm label={"Send"} />
          <div className="flex justify-center text-orange-700">
            <Question label={"Don't have an account?"} to={"/signup"} toLabel={"SignUp"} />
          </div>
        </div>
      </div>
    </div>
  )
}
