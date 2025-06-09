import React, { useState, useEffect } from 'react'
import EventCardComponent from '../components/EventCardComponent'
import '../style/FavoriteEventPageStyle.css'

export default function FavoriteEventPage() {
  const userId = localStorage.getItem('userId')
  const [backendFavoriteIds, setBackendFavoriteIds] = useState([])
  const [localFavoriteIds, setLocalFavoriteIds] = useState(
    JSON.parse(localStorage.getItem('localFavorites')) || []
  )
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/eventi')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error('Errore nel caricamento eventi:', err))
  }, [])

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:3000/api/user/${userId}/favorites`)
        .then(res => res.json())
        .then(data => {
          setBackendFavoriteIds(data.favorites || []);
        })
        .catch(err => console.error('Errore nel caricamento preferiti:', err))
    }
  }, [userId])

  // Unisci i preferiti: backend (eventi con _id) e locali (eventi con id)
  const favoriteEvents = events.filter(e =>
    (e._id && backendFavoriteIds.includes(e._id)) ||
    (e.id && localFavoriteIds.includes(e.id))
  )

  const removeFavorite = (event) => {
    if (event._id && userId) {
      // Evento dal backend: rimuovi dai preferiti del backend
      fetch(`http://localhost:3000/api/user/${userId}/favorites/${event._id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => setBackendFavoriteIds(data.favorites || []))
        .catch(err => console.error('Errore nella rimozione del preferito:', err))
    } else if (event.id) {
      // Evento solo FE: rimuovi da localStorage
      const updated = localFavoriteIds.filter(favId => favId !== event.id)
      setLocalFavoriteIds(updated)
      localStorage.setItem('localFavorites', JSON.stringify(updated))
    }
  }

  return (
    <div className="favorite-events-container">
      <h2 className="favorite-title">I tuoi preferiti</h2>
      {favoriteEvents.length === 0 && <p className="favorite-empty">Nessun evento nei preferiti.</p>}
      <div className="favorite-cards-list">
        {favoriteEvents.map(event => (
          <div key={event._id || event.id} className="favorite-card-wrapper">
            <EventCardComponent event={event} />
            <button
              className="remove-favorite-icon"
              onClick={() => removeFavorite(event)}
              aria-label="Rimuovi dai preferiti"
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}