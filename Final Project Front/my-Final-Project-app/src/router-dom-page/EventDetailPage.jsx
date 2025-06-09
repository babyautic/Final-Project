// EventDetailPage.jsx
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

export default function EventDetailPage() {
  const { id } = useParams()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
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
    <div>
      <h2>{event.nome}</h2>
      <img src={event.img} alt={event.nome} />
      <p>{event.descrizione}</p>
    </div>
  )
}