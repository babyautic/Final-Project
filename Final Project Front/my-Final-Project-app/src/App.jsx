import './App.css'

//import Components
import NavBarComponent from './components/NavBarComponent'
import EventCardComponent from './components/EventCardComponent'
import EventListComponent from './components/EventListComponent'
import FiltersComponent from './components/FiltersComponent'
import FavoriteButtonComponent from './components/FavoriteButtonComponent'

//import Pages
import { Routes, Route } from 'react-router-dom'
import HomePage from './router-dom-page/HomePage'


function App() {

  return (
    <>
      <NavBarComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* altre rotte */}
      </Routes>



    </>
  )
}

export default App