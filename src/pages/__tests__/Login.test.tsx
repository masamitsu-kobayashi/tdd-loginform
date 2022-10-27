import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Login } from "../Login";
import { RecoilRoot } from "recoil";

/*
  必要なコンポーネントが表示されている
  UserIDとパスワードが一致していたらOKと表示される
  不一致なら、ユーザIDかパスワードに誤りがあります。と表示される
*/

jest.mock("axios");
const loginMock = jest.spyOn(axios, "post").mockName("axios-post");

const mockUserPage = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUserPage,
}));

describe("必要なコンポーネントが表示されている", () => {
  it("スナップショットテスト", () => {
    render(
      <RecoilRoot>
        <Login />
      </RecoilRoot>
    );
    const { asFragment } = render(
      <RecoilRoot>
        <Login />
      </RecoilRoot>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("UserIDとパスワードが一致していたらOKと表示される", () => {
  describe("userid,passwordを送信した際の挙動", () => {
    let userIdFIeld: HTMLElement;
    let passwordFIeld: HTMLElement;
    let loginBtn: HTMLElement;

    beforeEach(() => {
      render(
        <RecoilRoot>
          <Login />
        </RecoilRoot>
      );
      userIdFIeld = screen.getByPlaceholderText("UserId");
      passwordFIeld = screen.getByPlaceholderText("password");
      loginBtn = screen.getByRole("button");
    });

    it("user@example.com, Passw0rdと入力したらユーザ画面が描画される", async () => {
      loginMock.mockResolvedValue({ data: { code: "200", msg: "OK" } });
      userEvent.type(userIdFIeld, "user@example.com");
      userEvent.type(passwordFIeld, "Passw0rd");
      await act(async () => {
        userEvent.click(loginBtn);
      });
      expect(mockUserPage).toBeCalledWith("/user");
      expect(mockUserPage).toHaveBeenCalledTimes(1);
    });

    it("user, Passw0rdと入力したらログインボタンがdisabledになっている", () => {
      loginMock.mockResolvedValue({
        data: { code: "400", msg: "Bad Request" },
      });
      userEvent.type(userIdFIeld, "user");
      userEvent.type(passwordFIeld, "Passw0rd");
      expect(screen.getByRole("button")).toBeDisabled();
    });
  });
});
