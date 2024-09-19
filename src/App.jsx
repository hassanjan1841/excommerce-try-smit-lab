import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Layout from "./components/home/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
