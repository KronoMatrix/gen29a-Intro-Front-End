import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../auth/pages/Home'


const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/login' element={<h1>Éste es el login</h1>} />
      <Route path='/home' element={<Home />} />
      
      <Route path='/*' element={ <Navigate to='/Error404' /> } />

    </Routes>
  )
}

export default RoutesIndex