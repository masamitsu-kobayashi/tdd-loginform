import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Login } from "../Login";

/*
  必要なコンポーネントが表示されている
  UserIDとパスワードが一致していたらOKとアラートが出る
  不一致なら、ユーザIDかパスワードに誤りがあります。と表示される
*/
describe("必要なコンポーネントが表示されている", () => {
  beforeEach(() => {
    render(<Login />);
  });

  it("スナップショットテスト", () => {
    const { asFragment } = render(<Login />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("user, Passw0rdと入力したら200,OKが帰ってくる", () => {
    const userIdFIeld = screen.getByPlaceholderText("UserId");
    const passwordFIeld = screen.getByPlaceholderText("password");
    const loginBtn = screen.getByRole("button");
    
  })


  // it("user, Passw0rdと入力したらアラートが出る", () => {

  // })

});
