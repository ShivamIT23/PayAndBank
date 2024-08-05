import { Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import SendMoney from "./Pages/SendMoney";
import DashBoard from "./Pages/DashBoard";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { settingAtom, tokenState, userAtom } from "./Store/atom";
import { useEffect } from "react";
import UserSetting from "./Components/UserSetting";
import { getProfile } from "../lib/helper";

function App() {
  const setUser = useSetRecoilState(userAtom);
  const setting = useRecoilValue(settingAtom);
  const token = useRecoilValue(tokenState);

  useEffect(() => {
    async function getUserProfile() {
      await new Promise(resolve => setTimeout( resolve, 1000))
      await getProfile(setUser);
  }
  getUserProfile();
  }, [token]);

  return (
    <>
      <div className="h-lvh">
        <Toaster position="top-right" />
        <NavBar />
        {setting && <UserSetting />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
