import { useState, useEffect, useHistory } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import CreatePrint from "./screens/Prints/CreatePrint";
import EditPrint from "./screens/Prints/EditPrint";
import Prints from "./screens/Prints/Prints";
import SinglePrint from "./screens/Prints/SinglePrints";
import SignIn from "./screens/SignUp&In/SignIn";
import SignUp from "./screens/SignUp&In/SignUp";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/Authentication";
function App() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  // let history = useHistory();
  console.log(user);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // create useEffect to fetch verified user
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setUser(userData);
    };
    handleVerify();
  }, []);
  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setUser(userData);
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setUser(userData);
  };
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };
  return (
    <Layout user={user} handleLogout={handleLogout}>
      <div className="App">
        {/* create Routes */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/sign-in"
            element={<SignIn handleLogin={handleLogin} />}
          />
          <Route
            path="/sign-up"
            element={<SignUp handleRegister={handleRegister} />}
          />
          <Route path="/print/:id" element={<SinglePrint />} />
          <Route path="/prints" element={<Prints />} />
          <Route path="/print-edit/:id" element={<EditPrint />} />
          <Route path="/create-print" element={<CreatePrint />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
