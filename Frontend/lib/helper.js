import axios from "axios";
import toast from "react-hot-toast";

export async function onClickHandler(label, data, navigate, setToken) {
  if (label == "Register") {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        }
      );
      console.log(response.data);
      if (response.data.message == "User created successfully") {
        setTimeout(() => {
          toast.success("User created successfully");
          navigate("/signin");
        }, 3000);
      }
      toast.error("Server Issue Please help us to correct this issue by filling contact form")
      navigate("/contact");
    } catch (error) {
      console.log(error.response.data);
    }
  }
  if (label == "Login") {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        {
          email: data.email,
          password: data.password,
        }
      );
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
