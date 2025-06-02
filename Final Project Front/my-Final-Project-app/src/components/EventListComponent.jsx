import React, { useEffect, useState } from 'react'
import EventCardComponent from './EventCardComponent'
import '../style/EventPageStyle.css'
import mockEvents from '../mocks/mockEvents'

export default function EventListComponent({ search = "" }) {
  const [events, setEvents] = useState([])

  useEffect(() => {
    setEvents(mockEvents)
  }, [])

  const filteredEvents = events.filter(event =>
    event.nome.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="eventListFlex">
      {filteredEvents.map(event => (
        <EventCardComponent key={event.id} event={event} />
      ))}
    </div>
  )
}
