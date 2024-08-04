import axios from "axios";
import toast from "react-hot-toast";
import { URL } from "./url";
import { useSetRecoilState } from "recoil";
import { balanceState } from "../src/Store/atom";

export async function onClickHandler(label, data, navigate, setToken) {
  if (label == "Register") {
    try {
      const response = await axios.post(`${URL}/api/v1/user/signup`, {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });
      console.log(response.data);
      if (response.data.message == "User created successfully") {
        setTimeout(() => {
          toast.success("User created successfully");
          navigate("/signin");
        }, 3000);
      }
      toast.error(
        "Server Issue Please help us to correct this issue by filling contact form"
      );
      navigate("/contact");
    } catch (error) {
      console.log(error.response.data);
    }
  }
  if (label == "Login") {
    try {
      const response = await axios.post(`${URL}/api/v1/user/signin`, {
        email: data.email,
        password: data.password,
      });
      console.log(response);
      console.log("hiii");
      setToken(true);
      console.log("hiii");
      localStorage.setItem("token", `Bearer ${response.data.token}`);
      console.log("hiii");
      const toastId = toast.loading("Logging .....");
      setTimeout(() => {
        toast.dismiss(toastId);
        toast.success("User Logged In");
        navigate("/dashboard");
      }, 4000);
      console.log("hiii");
    } catch (error) {
      console.log(error);
    }
  }
  if (label == "Send") {
    try {
      console.log("hiii");
    } catch (err) {
      console.log(err);
    }
  }
}

export async function getBalance(){
  try {
  const response = await axios.get(`${URL}/api/v1/account/balance`, {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  });
  return response.data.balance;
} catch (err) {
  console.log(err);
  return 0;
}
}