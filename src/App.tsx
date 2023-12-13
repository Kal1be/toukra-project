import { Routes,Route } from 'react-router-dom'
import './composant/carousel.scss'
import Home from './pages/Home'
import Footer from './composant/Footer'
import NotFound from './pages/NotFound'
import { useState,useEffect } from 'react'
import "./App.css"
import Faculte1 from './pages/Faculte1'
import Admission from './pages/Admission'
import Historique from './pages/Historique'
function App() {

  const [isloaded,setIsloaded]=useState(false);
  useEffect(()=>{
      setTimeout(() => {
          setIsloaded(true)
      },7000);
  },[])
  if(!isloaded){
     return(
      <div className='preloader bg-gray-100'>
       <span className='animation1'></span>
        <span className='animation2'></span>
        <span className='animation2'></span>
       </div>
     )
  }

  return (
    <>
    <Routes>
      <Route path="/toukra-project/" element={<Home/>}/>
      <Route path='/toukra-project/faculte' element={<Faculte1/>}/>
      <Route path='/toukra-project/admission' element={<Admission/>}/>
      <Route path='/toukra-project/historique' element={<Historique/>}/>
      <Route path='/toukra-project/*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
