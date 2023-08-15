import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Components/Form";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Home } from "./Pages/Home";
import { Landing } from "./Pages/LandingPage";
import { Navbar } from "./Components/Navbar";
import { Sidebar } from "./Components/Sidebar";
import { temp } from "./Context/Context";
import { useState } from "react";

function App() {
  const [userinfo, setUserInfo] = useState(null);
  return (
    <div className="App">
      <temp.Provider value={{ userinfo, setUserInfo }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/form"
              element={
                <>
                  <Sidebar />
                  <Navbar />
                  <Form />
                </>
              }
            />
            <Route path="/landing" element={<Landing />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </temp.Provider>
    </div>
  );
}

export default App;
