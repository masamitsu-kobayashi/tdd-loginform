import axios from "axios";
import { LoginResponse } from "../types/global";

export const loginRequest = async (userId: string, password: string) => {
  const { data } = await axios.post("https://httpstat.us/200", {
    userId: userId,
    passowrd: password,
  });
  return data as LoginResponse;
};
