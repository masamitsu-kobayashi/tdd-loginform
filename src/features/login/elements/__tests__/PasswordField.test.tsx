import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Login } from "../../layout/Login";
it("",()=>{})

/*
let passwordField: HTMLInputElement;

beforeEach(() => {
  render(<Login />);
  passwordField = screen.getByPlaceholderText("password");
});

afterEach(() => {
  userEvent.clear(passwordField);
});

describe("8文字以上でないとき、バリデーションエラーになること", () => {
  it("初期状態で、バリデーションエラーになる", () => {
    screen.getByText("8文字以上で入力してください。");
  });

  it("7文字入力すると、バリデーションエラーになる", () => {
    userEvent.type(passwordField, "1234567");
    screen.getByText("8文字以上で入力してください。");
  });
  it("8文字入力すると、バリデーションエラーにならない", () => {
    userEvent.type(passwordField, "12345678");
    expect(screen.queryByText("8文字以上で入力してください。")).toBeNull();
  });
});

describe("大文字小文字数字の少なくとも1種類が入力されていないとき、バリデーションエラーになること", () => {
  it("初期状態で、バリデーションエラーになる", () => {
    screen.getByText(
      "大文字小文字数字を少なくとも1つずつ以上使用してください。"
    );
  });
  it("数字8桁を入力すると、バリデーションエラーになる", () => {
    userEvent.type(passwordField, "12345678");
    screen.getByText(
      "大文字小文字数字を少なくとも1つずつ以上使用してください。"
    );
  });
  it("半角英字8桁を入力すると、バリデーションエラーになる", () => {
    userEvent.type(passwordField, "abcdefgh");
    screen.getByText(
      "大文字小文字数字を少なくとも1つずつ以上使用してください。"
    );
  });
  it("大文字8桁を入力すると、バリデーションエラーになる", () => {
    userEvent.type(passwordField, "ABCDEFGH");
    screen.getByText(
      "大文字小文字数字を少なくとも1つずつ以上使用してください。"
    );
  });
  it("数字+小文字8桁を入力すると、バリデーションエラーになる", () => {
    userEvent.type(passwordField, "1234EFGH");
    screen.getByText(
      "大文字小文字数字を少なくとも1つずつ以上使用してください。"
    );
  });
  it("数字+大文字8桁を入力すると、バリデーションエラーになる", () => {
    userEvent.type(passwordField, "1234EFGH");
    screen.getByText(
      "大文字小文字数字を少なくとも1つずつ以上使用してください。"
    );
  });
  it("小文字+大文字8桁を入力すると、バリデーションエラーになる", () => {
    userEvent.type(passwordField, "abcdEFGH");
    screen.getByText(
      "大文字小文字数字を少なくとも1つずつ以上使用してください。"
    );
  });
  it("数字+小文字+大文字8桁を入力すると、バリデーションエラーにならない", () => {
    userEvent.type(passwordField, "123abcAB");
    expect(
      screen.queryByText(
        "大文字小文字数字を少なくとも1つずつ以上使用してください。"
      )
    ).toBeNull();
  });
});
*/