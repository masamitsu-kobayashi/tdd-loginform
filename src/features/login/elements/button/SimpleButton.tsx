import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  disabled?: boolean;
  size?: "lg" | "md" | "sm" | "xs";
  label: string;
  handleClick?: () => void;
}

export const SimpleButton = (props: Props) => {
  return (
    <>
      <Button onClick={props.handleClick} isDisabled={props.disabled}>
        {props.label}
      </Button>
    </>
  );
};
