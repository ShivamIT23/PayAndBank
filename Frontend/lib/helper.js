import axios from "axios";
import toast from "react-hot-toast";
import { URL } from "./url";
const time = 3500;

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
        }, time);
      } else {
        toast.error(
          "Server Issue Please help us to correct this issue by filling contact form"
        );
        navigate("/contact");
      }
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
      localStorage.setItem("token", `Bearer ${response.data.token}`);
      console.log("hiii");
      setToken(true);
      console.log("hiii");
      const toastId = toast.loading("Logging .....");
      setTimeout(() => {
        toast.dismiss(toastId);
        toast.success("User Logged In");
        navigate("/dashboard");
      }, time);
      console.log("hiii");
    } catch (error) {
      console.log(error.response.data);
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

export async function getBalance() {
  try {
    const response = await axios.get(`${URL}/api/v1/account/balance`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    return response.data.balance;
  } catch (err) {
    console.log(err);
    toast.error("Issue when fetching balance");
    return 0;
  }
}

export async function getUsers(filter) {
  try {
    const response = await axios.get(
      `${URL}/api/v1/user/bulk?filter=${filter}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    console.log(response.data.user);
    return response.data.user;
  } catch (err) {
    console.log(err);
  }
}

export async function transferHandler(amount, id, navigate) {
  try {
    if(isNaN(parseInt(amount))){
      toast.error("Invalid amount")
    }
    else{
    const response = await axios.post(
      `${URL}/api/v1/account/transfer`,
      {
        amount: parseFloat(amount),
        receiverId : id,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    console.log(response)
    if(response.data.message == "Transfer successful"){
      const toastID = toast.loading("Sending Money....");
      setTimeout(async ()=>{
        toast.dismiss(toastID);
        toast.success("Transfer successful");
        await new Promise(resolve => setTimeout(resolve, 500));
        navigate("/dashboard");
      },1000);
    }
  }
  } catch (err) {
    console.log(err.response.data.message);
    toast.error(err.response.data.message);
  }
}
