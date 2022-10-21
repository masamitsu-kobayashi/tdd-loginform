import { Input } from "@chakra-ui/react";
import React from "react";

type Props = {
  type: "text" | "password";
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = (props: Props) => {
  return (
    <Input
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};
