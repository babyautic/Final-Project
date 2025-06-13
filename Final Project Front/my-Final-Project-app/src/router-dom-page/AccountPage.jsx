import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import LogOutComponent from '../components/LogOutComponent'
import '../style/LogOutStyle.css'
export default function AccountPage() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    alert('Logout effettuato!');
    navigate("/");
    window.location.reload();
  }

  return (
    <div>
      <h3>Logout</h3>
      <LogOutComponent logout={logout} />
    </div>
  )
}
