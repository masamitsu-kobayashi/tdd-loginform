import React from "react";
import { useRecoilValue } from "recoil";
import { userIdState } from "../atoms/atoms";

export const User = () => {
  const userId = useRecoilValue(userIdState);
  return <div>{userId}</div>;
};
