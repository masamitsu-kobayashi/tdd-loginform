import React, { useEffect, useState } from "react";
import { SimpleButton } from "../elements/button/SimpleButton";
import { InputField } from "../elements/Input";
import { PasswordField } from "../elements/PasswordField";
import { UserIdFIeld } from "../elements/UserIdFIeld";
import {
  isInvalidEmail,
  isInvalidPasswordFormat,
  isUnderLength8,
} from "../utils/utils";

export const Login = () => {
  const [userId, setUserId] = useState<string>("");
  const handleChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const [password, setPassword] = useState<string>("");
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <UserIdFIeld value={userId} handleChange={handleChangeUserId} />
      <PasswordField value={password} handleChange={handleChangePassword} />
      <SimpleButton label="ログイン" />
    </>
  );
};
