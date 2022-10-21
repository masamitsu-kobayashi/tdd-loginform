import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Login } from "../../layout/Login";
it("",()=>{})
/*
  ユーザID
    メールアドレス形式になっていないとき、バリデーションエラーになること
*/
/*
let userIdField: HTMLInputElement;

beforeEach(() => {
  render(<Login />);
  userIdField = screen.getByPlaceholderText("UserId");
});

afterEach(() => {
  userEvent.clear(userIdField);
});

it("初期状態で、バリデーションエラーになる", () => {
  screen.getByText("メールアドレスを入力してください。");
});

it("メールアドレス形式になっているとき、バリデーションエラーが表示されないこと", () => {
  userEvent.type(userIdField, "hoge@example.jp");
  expect(screen.queryByText("メールアドレスを入力してください。")).toBeNull();
});

it("メールアドレス形式になっていないとき、バリデーションエラーになること", () => {
  userEvent.type(userIdField, "hogehoge");
  screen.getByText("メールアドレスを入力してください。");
});

*/