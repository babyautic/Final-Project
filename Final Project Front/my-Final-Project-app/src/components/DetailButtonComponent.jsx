import React from 'react'
import '../style/DetailButtonStyle.css'

export default function DetailButtonComponent({ children = "Dettagli", ...props }) {
  return (
    <button className="detailButton" {...props}>
      {children}
    </button>
  )
}
