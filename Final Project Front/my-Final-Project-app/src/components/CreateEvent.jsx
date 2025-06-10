import React, { useState } from 'react'

export default function CreateEvent() {
  const [form, setForm] = useState({
    nameEvent: '',
    description: '',
    date: '',
    location: '',
    image: ''
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Qui puoi aggiungere la fetch per inviare i dati al backend
    console.log('Evento creato:', form)
  }

  return (
    <form className="create-event-form" onSubmit={handleSubmit}>
      <h2>Crea un nuovo evento</h2>
      <label>
        Nome evento:
        <input
          type="text"
          name="nameEvent"
          value={form.nameEvent}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Descrizione:
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Data:
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Immagine (URL):
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Crea evento</button>
    </form>
  )
}
