import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Leaderboard from "./Components/pages/Leaderboard";
import Login from "./Components/pages/Login";
import Signup from "./Components/pages/Signup";
import Home from "./Components/pages/Home";
import Ministore from "./Components/pages/Ministore";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/pages/Navbar";
import Profile from "./Components/pages/Profile";
import Forum from "./Components/pages/Forum";

function App() {
  return (
    <BrowserRouter>
          <Navbar />

      <Routes>
        <Route path="/leader" element={<Leaderboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/store" element={<Ministore />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>{" "}
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
