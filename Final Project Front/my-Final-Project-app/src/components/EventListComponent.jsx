import React, { useEffect, useState } from 'react'
import EventCardComponent from './EventCardComponent'
import '../style/EventPageStyle.css'
import mockEvents from '../mocks/mockEvents'

export default function EventListComponent() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    setEvents(mockEvents)
  }, [])

  return (
    <div className="eventListFlex">
      {events.map(event => (
        <EventCardComponent key={event.id} event={event} />
      ))}
    </div>
  )
}
