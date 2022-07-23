import React, { useState,useRef } from 'react'
import { signup,useAuth,logout } from './components/firebase/firebase';
import Main from './components/pages/Main/Main';
import Auth from './components/pages/Auth/Auth';
import Contact from './components/pages/Contact/Contact';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from 'react-router-dom';

const AppRoutes = () => {
  const routes = useRoutes(
    [
      { path:'/', element: <Main /> },
      { path:'/auth', element: <Auth /> },
      { path: '/contact', element: <Contact /> }
    ]
  )
  return routes;
}

function App() {
  const [loading,setLoading] = useState(false);

  const loginRef = useRef();
  const passwordRef = useRef();
  const handleSignup = async () => {
    setLoading(true)
    try{
      await signup(loginRef.current.value,passwordRef.current.value);
      await window.location.assign("http://localhost:3000/auth");
    }catch(err){
      alert(err)
    }
    setLoading(false);
  }
  const currentLogin = useAuth();

  const handleLogout = async () => {
    try{
      await logout();
    }catch(err){
      alert(err);
    }
  }

  return (
    <div>
      <Routes>
        <Route path ="/" element={<Main handleSignup={handleSignup} loginRef={loginRef} passwordRef={passwordRef} currentLogin={currentLogin}/>} />
        <Route path='/auth' element={<Auth currentLogin={currentLogin} handleLogout={handleLogout}/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
