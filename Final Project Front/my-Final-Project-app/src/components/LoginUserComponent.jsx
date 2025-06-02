import React, { useState } from 'react'
import '../style/LoginUserStyle.css'

export default function LoginUserComponent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Qui puoi aggiungere la chiamata API per il login
    alert(`Email: ${email}\nPassword: ${password}`)
    // Reset campi (opzionale)
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
    </div>
  )
}
