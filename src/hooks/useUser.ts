import { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";
import axios from "axios";
import { User } from "../types/user";
import useAuthContext from "./useAuthContext";



const useUser = () => {
  const [error, setError] = useState<null | string>(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext()
  const api = useContext(ApiContext)!;

  const loginUser = async ({ email, password }: User) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await api.post("/user/login", {
        email,
        password
      });
      console.log(res)
      dispatch({ type: "LOGIN", payload: res.data.data });
      setIsPending(false);
      return res;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        setError(error.response?.data.error);
      }
      setIsPending(false);
    }
  };

  const logoutUser = () => {
    dispatch({ type: "LOGOUT" });
  };

  return { error, isPending, loginUser, logoutUser };
};

export default useUser;
