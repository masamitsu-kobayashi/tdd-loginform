import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { User } from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"user"} element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
