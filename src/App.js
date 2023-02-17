import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import GlobalStyle from "./styles/globalStyles";

export default function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
