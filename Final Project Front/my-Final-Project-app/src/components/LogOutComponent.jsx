import React from 'react'

import '../style/LogOutStyle.css'
export default function LogOutComponent({ logout }) {
  return (
    <div className="logoutContainer">
      <button className="logoutBtn" onClick={logout}>Vuoi effettuare il logout?</button>
    </div>
  );
}
