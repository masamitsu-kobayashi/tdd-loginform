import React, { useState } from "react";
import { isInvalidPasswordFormat, isUnderLength8 } from "../utils/utils";
import { InputField } from "../elements/input/Input";

interface Props {
  value: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordField = (props: Props) => {
  return (
    <div className="password">
      <InputField
        type="password"
        value={props.value}
        placeholder="password"
        onChange={
          props.handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void
        }
      />
      {isUnderLength8(props.value) && (
        <label>8文字以上で入力してください。</label>
      )}
      {isInvalidPasswordFormat(props.value) && (
        <label>大文字小文字数字を少なくとも1つずつ以上使用してください。</label>
      )}
    </div>
  );
};
