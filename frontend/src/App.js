import GlobalStyle2 from "./theme/globalStyles2.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SignUp from "./components/SignUp.js";

function App() {
  return (
    <>
      <GlobalStyle2 />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/account" element={<></>} />
            <Route path="/list" element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
