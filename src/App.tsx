import { Routes,Route } from 'react-router-dom'
import './composant/carousel.scss'
import Home from './pages/Home'
import Footer from './composant/Footer'
import NotFound from './pages/NotFound'
import { useState,useEffect } from 'react'
import "./App.css"
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
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
