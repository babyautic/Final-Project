// EventDetailPage.jsx
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import mockEvents from '../mocks/mockEvents'
import '../style/EventDetailStyle.css'


export default function EventDetailPage() {
  const { id } = useParams()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const mockEvent = mockEvents.find(e => String(e.id) === String(id))
    if (mockEvent) {
      setEvent(mockEvent)
      setLoading(false)
      return
    }

    // Altrimenti prova la fetch API
    fetch(`http://localhost:3000/api/eventi/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Evento non trovato')
        return res.json()
      })
      .then(data => {
        setEvent(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div>Caricamento...</div>
  if (error) return <div>{error}</div>
  if (!event) return <div>Evento non trovato</div>

  return (
    <div className="eventDetailContainer">
      <h2>{event.nome || event.nameEvent}</h2>
      <img src={event.img || event.image} alt={event.nome || event.nameEvent} />
      <p>{event.descrizione || event.description}</p>
      {event.location && <p><strong>Location:</strong> {event.location}</p>}
      {event.data && <p><strong>Data:</strong> {event.data}</p>}
      {event.orario && <p><strong>Orario:</strong> {event.orario}</p>}
      {event.descrizioneDettagliata && <p>{event.descrizioneDettagliata}</p>}
      {event.organizzatore && <p><strong>Organizzatore:</strong> {event.organizzatore}</p>}
    </div>
  )
}