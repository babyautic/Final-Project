import '../style/HomePageStyle.css'
import mapIcon from '../assets/mapicon.jpg'
import { Link } from 'react-router-dom'

import FeaturedCardComponent from '../components/FeaturedCardComponent'
import mockEvents from '../mocks/mockEvents'
import EventCardComponent from '../components/EventCardComponent'

// Dati manuali per l'evento in evidenza
const featuredEvent = {
    id: 1,
    nome: "Music Festival",
    data: "2023-10-15",
    location: "Central Park, NY",
    descrizione: "Join us for a day of music and fun!",
    img: "https://via.placeholder.com/300"
}

const homeEventIds = [2, 4, 5, 6]; // scegli gli ID che vuoi mostrare
const homeEvents = mockEvents.filter(e => homeEventIds.includes(e.id));

export default function HomePage() {
    return (

        <>
            <div id='mainContainer'>
                <h1>STREET AND RACE</h1>


                

                <div id='mainEventCard' className="event-flex-row">
                    <div className="featured-col">
                        <div id="titleFeaturedEvent">
                            <h2>in evidenzia</h2>
                        </div>
                        <FeaturedCardComponent />
                    </div>
                    <div id='eventDetailsContainer'>
                        <div id='eventDetails'>
                            <h2>Event Details</h2>
                            <p>Event Name: {featuredEvent.nome}</p>
                            <p>Date: {featuredEvent.data}</p>
                            <p>Location: {featuredEvent.location}</p>
                            <p>Description: {featuredEvent.descrizione}</p>
                        </div>
                    </div>
                </div>


                <div className="our-events-section">
                    <h2>I nostri eventi</h2>
                    <div className="eventListFlex">
                        {homeEvents.map(event => (
                            <EventCardComponent key={event.id} event={event} />
                        ))}
                    </div>
                </div>


                <div id='iconContainer'>
                    <div className='containerIconText'>
                        <Link to="/EventPage" className="icon-link">
                            <ion-icon name="map-outline" class="icon"></ion-icon>
                        </Link>
                        <h6><span>1.</span> Location</h6>
                    </div>
                    <div className='containerIconText'>
                        <ion-icon name="calendar-outline" class="icon"></ion-icon>
                        <h6><span>2.</span> Event</h6>
                    </div>

                    <div className='containerIconText'>
                        <ion-icon name="share-social-sharp" class="icon"></ion-icon>
                        <h6><span>3.</span> Share</h6>
                    </div>
                </div>

               
            </div>


        </>
    )
}