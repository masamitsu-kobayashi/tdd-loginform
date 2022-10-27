import React, { useState } from "react";
import { SimpleButton } from "../features/login/elements/button/SimpleButton";
import { PasswordField } from "../features/login/layout/PasswordField";
import { UserIdFIeld } from "../features/login/layout/UserIdFIeld";
import { loginRequest } from "../features/login/api/LoginApi";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userIdState } from "../atoms/atoms";
import {
  isInvalidEmail,
  isInvalidPasswordFormat,
} from "../features/login/utils/utils";

export const Login = () => {
  // const [userId, setUserId] = useState("");
  const [userId, setUserId] = useRecoilState(userIdState);
  const handleChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const [password, setPassword] = useState<string>("");
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const handleClick = async () => {
    const { code } = await loginRequest(userId, password);
    if (code == "200") {
      navigate("/user");
    }
  };

  const isInvalidInput = () => {
    return isInvalidEmail(userId) || isInvalidPasswordFormat(password);
  };

  return (
    <>
      <UserIdFIeld value={userId} handleChange={handleChangeUserId} />
      <PasswordField value={password} handleChange={handleChangePassword} />
      <SimpleButton
        label="ログイン"
        handleClick={handleClick}
        disabled={isInvalidInput()}
      />
    </>
  );
};
