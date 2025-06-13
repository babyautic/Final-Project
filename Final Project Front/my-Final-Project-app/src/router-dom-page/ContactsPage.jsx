import React from 'react'
import '../style/ContactsStyle.css'
import iconGmail from '../assets/iconGmail.jpg';
import iconInstagram from '../assets/iconInstagram.jpg';
import iconWhatsapp from '../assets/iconWatshapp.jpg';

export default function ContactsPage() {
  return (
    <div className="contacts-container">
     
      <div className="contactsSection">
        <h2>Contatti</h2>
        <ul>
          <li>
            <img src={iconWhatsapp} alt="WhatsApp" className="contact-icon custom-whatsapp" />
            <a href="https://wa.me/391234567890" target="_blank" rel="noopener noreferrer">+39 123 456 7890</a>
          </li>
          <li>
            <img src={iconGmail} alt="Gmail" className="contact-icon custom-gmail" />
            <a href="mailto:info@email.com">info@email.com</a>
          </li>
          <li>
            <img src={iconInstagram} alt="Instagram" className="contact-icon custom-instagram" />
            <a href="https://instagram.com/tuonomeutente" target="_blank" rel="noopener noreferrer">@tuonomeutente</a>
          </li>
        </ul>
      </div>
    </div>
  )
}