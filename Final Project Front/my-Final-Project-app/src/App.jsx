import './App.css'
import React, { useState, useEffect } from 'react'

//import Components
import NavBarComponent from './components/NavBarComponent'
import EventCardComponent from './components/EventCardComponent'
import EventListComponent from './components/EventListComponent'
import FiltersComponent from './components/FiltersComponent'
import FavoriteButtonComponent from './components/FavoriteButtonComponent'

//import Pages
import { Routes, Route } from 'react-router-dom'
import HomePage from './router-dom-page/HomePage'
import EventDetailPage from './router-dom-page/EventDetailPage'
import EventPage from './router-dom-page/EventPage'
import FavoriteEventPage from './router-dom-page/FavoriteEventPage'
import LoginUserPage from './router-dom-page/LoginUserPage'
import ContactsPage from './router-dom-page/ContactsPage'


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      // Chiudi il menu ogni volta che passi a desktop
      if (window.innerWidth >= 992) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <NavBarComponent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div id="mainContent" className={menuOpen ? "blurred" : ""}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/event/:id" element={<EventDetailPage />} />
          <Route path="/favorite" element={<FavoriteEventPage />} />
          <Route path="/eventpage" element={<EventPage />} />
          <Route path="/login" element={<LoginUserPage />} />
          
        </Routes>
      </div>
      
    </>
  )
}

export default App