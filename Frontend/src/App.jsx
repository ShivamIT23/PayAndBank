import { Route, Routes } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import './App.css'
import SendMoney from './Pages/SendMoney';
import DashBoard from './Pages/DashBoard';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { settingAtom, tokenState, userAtom } from "./Store/atom";
import { useEffect } from "react";
import axios from "axios";
import UserSetting from "./Components/UserSetting";

function App() {
  const [user , setUser] = useRecoilState(userAtom);
  const setting = useRecoilValue(settingAtom);
  const token = useRecoilValue(tokenState);

  useEffect(()=>{
    if(user){
      return;
    }
    else{
    setTimeout(()=>{
      axios.get("http://localhost:3000/api/v1/user/login" ,{
      headers: {
        "Authorization": `${localStorage.getItem("token")}`
      }
    }).then(res => {
      console.log(res)
      setUser(res.data.user);
      toast.success(res.data.message);
    }).catch(err =>{ console.log(err);
      setUser('')
      toast.error(err.response.data.message || err.response.message);
    })
    },3000)}
  },[token])

  return (
    <>
    <div className="h-lvh">
      <Toaster position="top-right"/>
      <NavBar />
      {setting &&<UserSetting />}
      <Routes>
        <Route exact path='/' element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
    </div>
    </>
    
  )
}

export default App
