import { Routes, Route } from 'react-router-dom'
import Home from '.../pages/Home'
import Characters from '.../pages/Characters'
import Episodes from '.../pages/Episodes'
import Locations from '.../pages/Locations'
import About from '.../pages/About'

const RoutesIndex = () => {
  return (
    <Routes>
        <Routes path='/' element={<Home />} />
        <Routes path='characters' element={<Characters />} />
        <Routes path='episodes' element={<Episodes />} />
        <Routes path='locations' element={<Locations />} />
        <Routes path='about' element={<About />} />
    </Routes>
  )
}

export default RoutesIndex