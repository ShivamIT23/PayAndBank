import { Route, Routes } from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';
import './App.css'
import SendMoney from './Pages/SendMoney';
import DashBoard from './Pages/DashBoard';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {

  return (
    <div className="h-lvh">
      <NavBar />
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
  )
}

export default App
