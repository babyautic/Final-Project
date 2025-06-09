import React, { useState } from 'react'
import '../style/LoginUserStyle.css'
import { Link } from 'react-router-dom'


export default function LoginUserComponent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
        .then(async res => {
          const data = await res.json();
          if (res.ok) {
            localStorage.setItem('userId', data.userId); // <-- solo se login ok!
            alert('Login effettuato!');
            // eventuale redirect
          } else {
            alert(data.error || 'Login fallito');
            // NON aggiornare localStorage!
          }
        })
        .catch(() => alert('Errore di rete'));
    } catch (err) {
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
