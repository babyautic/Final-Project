import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../style/LoginUserStyle.css'
import { Link, Navigate } from 'react-router-dom'


export default function LoginUserComponent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailUser: email, pwdUser: password })
      })
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('userId', data.token); // salva token o userId
        alert('Login effettuato!');
        navigate("/");
        window.location.reload();
      } else {
        alert(data.error || 'Login fallito');
      }
    } catch (err) {
      console.log(err);
      alert('Errore di rete')
    }
    setEmail('')
    setPassword('')
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <div className='RegistrationLink'><Link to="/registration">Non hai un account? Registrati</Link></div>
    </div>
  )
}