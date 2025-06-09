import React from 'react'

export default function FeaturedCardComponent() {
  return (
    <div
      className="card"
      style={{
        width: '45rem',
        background: 'transparent',
        border: 'none',
        boxShadow: 'none',
        padding: 0,
      }}
    >
      <img
        src="https://img.freepik.com/free-photo/anime-car-city_23-2151710983.jpg?uid=R201212174&ga=GA1.1.520862019.1740509080&semt=ais_items_boosted&w=740"
        className="card-img-top featured-img"
        alt="img"
      />
    </div>
  )
}