import React from 'react'
import '../style/FavoriteButtonStyle.css'

export default function FavoriteButtonComponent({ event, userId, backendFavoriteIds, setBackendFavoriteIds, localFavoriteIds, setLocalFavoriteIds }) {
  const handleAddFavorite = () => {
    console.log('Bottone cliccato', event, userId);
    if (event._id && userId) {
      // Evento dal backend: aggiungi ai preferiti del backend
      fetch(`http://localhost:3000/api/user/${userId}/favorites`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventId: event._id })
      })
        .then(res => res.json())
        .then(data => {
          console.log('Risposta backend:', data);
          setBackendFavoriteIds(data.favorites || []);
          alert('Aggiunto ai preferiti!');
        })
        .catch((err) => {
          console.error('Errore nell\'aggiunta ai preferiti!', err);
          alert('Errore nell\'aggiunta ai preferiti!');
        });
    } else if (event.id) {
      // Evento solo FE: aggiungi a localStorage
      if (!localFavoriteIds.includes(event.id)) {
        const updated = [...localFavoriteIds, event.id]
        setLocalFavoriteIds(updated)
        localStorage.setItem('localFavorites', JSON.stringify(updated))
        alert('Aggiunto ai preferiti!')
      } else {
        alert('Evento già nei preferiti!')
      }
    }
  }

  return (
    <button className="favoriteButton" onClick={handleAddFavorite}>
      <span className="favoriteButtonText" role="img" aria-label="heart">aggiungi ai tuoi preferiti ❤️</span>
    </button>
  )
}

