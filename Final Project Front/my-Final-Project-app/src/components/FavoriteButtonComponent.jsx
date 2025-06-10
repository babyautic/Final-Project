import React from 'react'
import '../style/FavoriteButtonStyle.css'
import { data } from 'react-router-dom';

export default function FavoriteButtonComponent({ event, localFavoriteIds, setLocalFavoriteIds }) {
  const handleAddFavorite = () => {
    console.log('Bottone cliccato', event, localStorage.getItem("userId"));
    if (event._id && localStorage.getItem("userId")) {
      fetch(`http://localhost:3000/api/user/eventi/${event._id}/preferiti`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("userId")}` },
      }).then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then(errorData => { // Tenta di leggere il corpo dell'errore
            throw new Error(errorData.message || 'Errore durante l\'aggiunta ai preferiti.');
          });
        }
      }).then(data => {
        alert('Evento aggiunto con successo ai preferiti!');
      }).catch(error => {
        alert(`Errore: ${error.message}`);
        console.error('Errore durante la richiesta al backend:', error);
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