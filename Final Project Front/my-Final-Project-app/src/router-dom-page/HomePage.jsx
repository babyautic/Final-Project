import '../style/HomePageStyle.css'


import FeaturedCardComponent from '../components/FeaturedCardComponent'
import EventCardComponent from '../components/EventCardComponent'
import FavoriteButtonComponent from '../components/FavoriteButtonComponent'


export default function HomePage() {
    return (

        <>
            <div id='mainContainer'>
                <h1>STREET AND RACE</h1>
                

                {/* Titolo centrato sopra le colonne */}
                <div id="titleFeaturedEvent">
                    <h2>in evidenzia</h2>
                </div>

                <div id='mainEventCard' className="event-flex-row">
                    <div className="featured-col">
                        <FeaturedCardComponent />
                    </div>
                    <div id='eventDetailsContainer'>
                        <div id='eventDetails'>
                            <h2>Event Details</h2>
                            <p>Event Name: Music Festival</p>
                            <p>Date: 2023-10-15</p>
                            <p>Location: Central Park, NY</p>
                            <p>Description: Join us for a day of music and fun!</p>
                            <FavoriteButtonComponent />
                        </div>
                    </div>
                </div>

                <div id='iconContainer'>
                    <ion-icon name="map-outline" class="icon"></ion-icon>
                    <ion-icon name="calendar-outline" class="icon"></ion-icon>
                    <ion-icon name="share-social-sharp" class="icon"></ion-icon>
                </div>
            </div>


        </>
    )
}