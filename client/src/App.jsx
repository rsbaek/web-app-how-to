import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./login/Login";
import Dashboard from "../dashboard/dashboard";
import { BrowserRouter, Navigate, Routes, Route, Link } from "react-router-dom";
// import { Link } from 'react-router'

function App() {
  const [activeUser, setActiveUser] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <h1>hello from the frontend!</h1>
        {/* <Link>sdfdfsdfsd</Link> */}
        <Link to="/">
          <button>Home</button>
        </Link>
        {/* put navbar here and use NavLinks ("it's a React router... thing" -Eric) */}
        {/* everything inside this reloads */}
        <Routes>
          <Route
            path="/"
            element={activeUser ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
