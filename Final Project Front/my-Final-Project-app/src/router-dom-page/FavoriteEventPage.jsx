import React from 'react'
import EventCardComponent from '../components/EventCardComponent'
import '../style/FavoriteEventPageStyle.css'
import mockEvents from '../mocks/mockEvents'



export default function FavoriteEventPage() {
  const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || []
  const favoriteEvents = mockEvents.filter(e => favoriteIds.includes(e.id))

  return (
    <div className="favorite-events-container">
      <h2 className="favorite-title">I tuoi preferiti</h2>
      {favoriteEvents.length === 0 && <p className="favorite-empty">Nessun evento nei preferiti.</p>}
      <div className="favorite-cards-list">
        {favoriteEvents.map(event => (
          <EventCardComponent key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}