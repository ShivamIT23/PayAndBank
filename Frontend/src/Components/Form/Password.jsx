import { useState } from "react";
import InputBox from "./InputBox";

export default function Password() {
    const [isVisible , setIsVisible] = useState(false)
  return (
    <>
      <InputBox
        label={"Password"}
        type={isVisible ?"text" : "password"}
      />
      <button
        className="absolute right-6 z-10"
        onClick={() => {
          setIsVisible((c) => !c);
        }}
      >
        {isVisible ? "$" : "@"}
      </button>
    </>
  );
}
