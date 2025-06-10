import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteButtonComponent from './FavoriteButtonComponent'

export default function EventCardComponent({ event }) {
  return (
    <div className="card" style={{ width: '18rem', minHeight: '200px' }}>
      <img src={event.image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{event.nameEvent}</h5>
        <p className="card-text">{event.description}</p>
        <Link to={`/event/${event.id}`}>Dettagli</Link>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
          <FavoriteButtonComponent event={event} />
        </div>
      </div>
    </div>
  )
}