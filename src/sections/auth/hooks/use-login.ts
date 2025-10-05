import { useAppDispatch } from "@/hooks/use-selector";
import { useRegisterMutation } from "@/store/services/auth/authApi";
import { setUser } from "@/store/slices/auth/auth-slice";
import { useState } from "react";
import { useNavigate } from "react-router";

const useLogin = () => {
  const [email, setEmail] = useState("eddytalavera073@gmail.com");
  const [password, setPassword] = useState("plumx34045");
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await register({ email, password }).unwrap();
      if (data && data.user) {
        dispatch(setUser(data.user));
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log("Registration successful:", data);
        navigate("/");
      } else {
        console.error("Registration failed: No user data returned");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  return { email, setEmail, password, setPassword, handleSubmit, navigate };
};

export default useLogin;
