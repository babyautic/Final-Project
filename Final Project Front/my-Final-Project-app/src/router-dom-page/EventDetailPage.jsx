// EventDetailPage.jsx
import { useParams } from 'react-router-dom'
import React from 'react'

const mockEvents = [
  { id: 1, nome: "Music Festival", descrizione: "Grande evento musicale!", img: "https://via.placeholder.com/300" },
  { id: 2, nome: "Street Race", descrizione: "Gara di auto in città!", img: "https://via.placeholder.com/300" },
  { id: 3, nome: "Auto Expo", descrizione: "Esposizione di auto tuning!", img: "https://via.placeholder.com/300" },
  { id: 4, nome: "Night Drift", descrizione: "Drift notturno in pista!", img: "https://via.placeholder.com/300" }
]

export default function EventDetailPage() {
  const { id } = useParams()
  // Attenzione: useParams restituisce id come stringa!
  const event = mockEvents.find(e => String(e.id) === String(id))

  if (!event) return <div>Evento non trovato</div>

  return (
    <div>
      <h2>{event.nome}</h2>
      <img src={event.img} alt={event.nome} />
      <p>{event.descrizione}</p>
    </div>
  )
}