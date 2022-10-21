import React from "react-dom/client";
import axios from "axios";
/*
  {user,password}を正しく入力したら{200, OK}が帰ってくる
  {user,password}を不正入力したら{400, Bad Request}が帰ってくる
*/
describe("LoginAPIのテスト", () => {
  it("{user,password}を正しく入力したら{200, OK}が帰ってくる", async () => {
    axios.get("/");
    const expectedResponse = { code: "200", msg: "OK" };
    // mockAxios
    //   .onGet("http://localhost:3000/mess_api")
    //   .reply(200, expectedResponse);
    // const loginBtn = screen.getByRole("button");
    // userEvent.click(loginBtn);
    // await waitFor(() => {
    // console.log(loginMock);
    // });
  });
});
