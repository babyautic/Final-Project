import React from 'react'
import '../style/MockEventsStyle.css'

export default function MockEventsComponent({ events }) {
  return (
    <div className="mockEventsList">
      {events.map(event => (
        <div key={event.id} className="mockEventCard">
          <img src={event.img} alt={event.nome} />
          <h3>{event.nome}</h3>
          <p>{event.descrizione}</p>
        </div>
      ))}
    </div>
  )
}