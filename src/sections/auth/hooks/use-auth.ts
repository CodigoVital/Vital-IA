import { useAppDispatch, useAppSelector } from "@/hooks/use-selector";
import { useRegisterMutation } from "@/store/services/auth/authApi";
import { setUser } from "@/store/slices/auth/auth-slice";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const useAuth = () => {
  const [email, setEmail] = useState("eddytalavera073@gmail.com");
  const [password, setPassword] = useState("plumx34045");
  const isAuthenticated = useAppSelector(
    (state) => state.authSlice.isAuthenticated
  );
  const user = useAppSelector((state) => state.authSlice.user);
  const location = useLocation();
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user && isAuthenticated) {
      if (location.pathname === "/auth") {
        navigate("/");
      }
    }
  }, [user, navigate, location.pathname, isAuthenticated]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await register({ email, password }).unwrap();
      if (data && data.user) {
        dispatch(setUser(data.user));
        localStorage.setItem("user", JSON.stringify(data.user));
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

export default useAuth;
