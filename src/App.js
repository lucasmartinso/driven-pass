import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import GlobalStyle from "./styles/globalStyles";

export default function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Main />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
