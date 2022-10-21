import React from "react";
import { isInvalidEmail } from "../utils/utils";
import { InputField } from "./Input";

interface Props {
  value: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserIdFIeld = (props: Props) => {
  return (
    <div className="userId">
      <InputField
        type="text"
        value={props.value}
        placeholder="UserId"
        onChange={
          props.handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void
        }
      />
      {isInvalidEmail(props.value) && (
        <label>メールアドレスを入力してください。</label>
      )}
    </div>
  );
};
