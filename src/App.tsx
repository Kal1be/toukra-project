import { Routes,Route } from 'react-router-dom'
import './composant/carousel.scss'
import Home from './pages/Home'
import Footer from './composant/Footer'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
