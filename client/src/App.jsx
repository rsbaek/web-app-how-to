import { useState } from 'react';
import './App.css';
import Login from './login/Login.jsx';
import Dashboard from './Dashboard';
import { BrowserRouter, Navigate, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [activeUser] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <h1>hello from the frontend!</h1>
        {/* <Link>sdfdfsdfsd</Link> */}
        <Link to='/'>
          <button>Home</button>
        </Link>
        {/* put navbar here and use NavLinks ("it's a React router... thing" -Eric) */}
        {/* everything inside this reloads */}
        <Routes>
          <Route
            path='/'
            element={activeUser ? <Navigate to='/dashboard' /> : <Login />}
          />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
