import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import GlobalStyle from "./styles/globalStyles";
import TokenContext from "./contexts/tokenContext";
import Secrets from "./pages/Secrets";
import Categories from "./pages/Categories";

export default function App() {
  const [ token, setToken ] = useState(localStorage.getItem("USER_TOKEN"));

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Main />}/>
          <Route path="/new" element={<Categories />}/>
          <Route path="/secret/:name" element={<Secrets />}/>
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}
