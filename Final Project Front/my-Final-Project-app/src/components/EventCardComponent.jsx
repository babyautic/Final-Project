import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteButtonComponent from './FavoriteButtonComponent'

export default function EventCardComponent({ event }) {
  return (
    <div className="card" style={{ width: '18rem', minHeight: '200px' }}>
      <img src={event.img} className="card-img-top" alt={event.nome} />
      <div className="card-body">
        <h5 className="card-title">{event.nome}</h5>
        <p className="card-text">{event.descrizione}</p>
        <Link to={`/event/${event.id}`}>Dettagli</Link>
        <FavoriteButtonComponent event={event} />
      </div>
    </div>
  )
}
