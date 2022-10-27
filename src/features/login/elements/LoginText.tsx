import React, { useEffect } from "react";
interface Props {
  code: string;
}
export const LoginText = (props: Props) => {
  const isLogin = props.code === "200";
  return <>{isLogin && <label>OK</label>}</>;
};
