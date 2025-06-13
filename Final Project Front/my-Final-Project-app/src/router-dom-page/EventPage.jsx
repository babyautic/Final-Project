import React, { useState } from 'react'
import EventListComponent from '../components/EventListComponent'
import '../style/EventPageStyle.css'

export default function EventPage() {
  const [search, setSearch] = useState("")

  return (
    <>
      <h1>Event Pages</h1>

      <div className="event-search-container">
        <input
          type="text"
          placeholder="Cerca eventi..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="event-search-input"
        />
      </div>

      <div className='eventListContainer'>
        <EventListComponent search={search} />
      </div>
    </>
  )
}
