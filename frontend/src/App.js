import GlobalStyle2 from "./theme/globalStyles2.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Account from "./pages/Account.js";
import Login from "./pages/Login.js";
import List from "./pages/List.js";

function App() {
  return (
    <>
      <GlobalStyle2 />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route path="/list" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
