import React, { useState } from 'react'
import '../style/RegistrationStyle.css'


export default function RegistrationComponent() {
  const [form, setForm] = useState({
    nameUser: '',
    dateOfBirth: '',
    emailUser: '',
    pwdUser: ''
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3000/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        alert('Registrazione completata!')
        // Puoi reindirizzare al login qui
      } else {
        alert(data.error || 'Registrazione fallita')
      }
    } catch {
      alert('Errore di rete')
    }
  }

  return (
    <form className="registration-form-horizontal" onSubmit={handleSubmit}>
      <h2>Registration</h2>
      <div className="registration-row">
        <label>
          Nome:
          <input
            type="text"
            name="nameUser"
            value={form.nameUser}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Data di nascita:
          <input
            type="date"
            name="dateOfBirth"
            value={form.dateOfBirth}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="registration-row">
        <label>
          Email:
          <input
            type="email"
            name="emailUser"
            value={form.emailUser}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="pwdUser"
            value={form.pwdUser}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Registrati</button>
    </form>
  )
}
