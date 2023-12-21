import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Screens/Login/Login';
import Login2 from './Screens/Login/Login2';
import Register1 from './Screens/Register.js/Register';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Screens/Home/Home';
import Register2 from './Screens/Register.js/Register2';
import Register3 from './Screens/Register.js/Register3';
import Blog from './Screens/Blog/Blog';
import Settings from './Screens/Settings.js/Settings';
import User from './Screens/User/User';
 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="login2" element={<Login2/>} />
          <Route path="register" element={<Register1 />} />
          <Route path="register2" element={<Register2 />} />
          <Route path="register3" element={<Register3 />} />
          <Route path="blog" element={<Blog />} />
          <Route path="settings" element={<Settings />} />
          <Route path="user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
