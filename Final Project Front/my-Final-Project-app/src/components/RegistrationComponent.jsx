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
    // Preparazione dei dati per l'invio al backend
    const dataToSend = { ...form };

    // Gestione specifica per dateOfBirth:
    // Converti la stringa 'YYYY-MM-DD' in un oggetto con '$date' e formato ISO 8601
    if (form.dateOfBirth) {
      // Crea un oggetto Date dalla stringa YYYY-MM-DD
      const dateObject = new Date(form.dateOfBirth);
      // Assicurati che sia una data valida
      if (!isNaN(dateObject.getTime())) {
        dataToSend.dateOfBirth = dateObject.toISOString();
      } else {
        // Gestisci il caso in cui la data non è valida, se necessario
        console.error("Data di nascita non valida:", form.dateOfBirth);
        alert("Per favore, inserisci una data di nascita valida.");
        return; // Blocca l'invio del form
      }
    }

    try {
      const res = await fetch('http://localhost:3000/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
      })
      const data = await res.json()
      if (res.ok) {
        alert('Registrazione completata!')
        // Puoi reindirizzare al login qui, ad esempio:
        // navigate('/login');
      } else {
        // Se il backend restituisce un messaggio di errore specifico
        alert(data.message || data.error || 'Registrazione fallita');
      }
    } catch (err) {
      console.error('Errore di rete o nella richiesta:', err);
      alert('Errore di rete. Controlla la tua connessione o riprova più tardi.');
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