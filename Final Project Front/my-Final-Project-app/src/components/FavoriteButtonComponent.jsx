import React from 'react'
import '../style/FavoriteButtonStyle.css' // Assicurati di avere questo file CSS
export default function FavoriteButtonComponent({ event }) {
  const handleAddFavorite = () => {
    // Prendi i preferiti già salvati o array vuoto
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    // Se non già presente, aggiungi l'id
    if (!favorites.includes(event.id)) {
      favorites.push(event.id)
      localStorage.setItem('favorites', JSON.stringify(favorites))
      alert('Aggiunto ai preferiti!')
    } else {
      alert('Evento già nei preferiti!')
    }
  }

  return (
    <button className="favoriteButton" onClick={handleAddFavorite}>
      <span className="favoriteButtonText" role="img" aria-label="heart">aggiungi ai tuoi preferiti ❤️</span>
    </button>
  )
}

