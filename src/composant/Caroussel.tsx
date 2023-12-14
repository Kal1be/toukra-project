import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faHome,faCheck, faExclamationCircle, faTools } from "@fortawesome/free-solid-svg-icons";
import "./carousel.scss"
import { motion } from "framer-motion";
import {Link } from "react-router-dom"
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 766 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 766, min: 0 },
    items: 1
  }
};


function Caroussel() {
  return (
    <div className="mx-2 md:mx-0">
<div className="back ">
<div className="back1">

   <Carousel 
   responsive={responsive}

   infinite={true}
  draggable={true}
  autoPlay={true}
  autoPlaySpeed={4000}
  itemClass="carousel-item-padding-10-px"
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
   >
      <div >
    <p>Bienvenue a l'universite de Toukra</p>
 <motion.h2
       initial={{opacity:0,x:-70}}
       transition={{duration:1}}
       whileInView={{scale:1,opacity:1,x:0}}
       >L'Education est la cles du success 
        <motion.span
       initial={{opacity:0,x:-70}}
       transition={{duration:2}}
       whileInView={{scale:1,opacity:1,x:0}}
       className="ms-1">d'une nation et pensee innovative</motion.span></motion.h2>
         <div className="mt-2">
      <Link to="/toukra-project/admission" className="bg-white py-[6px] md:py-[10px] px-[20px] font-medium text-sky-400">Programme</Link >
      <button>Lire plus</button>
    </div>

         </div>
         <div >
    <p>Bienvenue devant E-learning</p>
 <motion.h2
       initial={{opacity:0,x:-70}}
       transition={{duration:1}}
       whileInView={{scale:1,opacity:1,x:0}}
       >Mahamat Saleh Haggar vous souhaite la bienvenue
        <motion.span
       initial={{opacity:0,x:-70}}
       transition={{duration:2}}
       whileInView={{scale:1,opacity:1,x:0}}
       className="ms-1">a l'universite</motion.span></motion.h2>
         <div className="mt-2">
         <Link to="/toukra-project/admission" className="bg-white py-[6px] md:py-[10px] px-[20px] font-medium text-sky-400">Suivre ++</Link >
      <button>Lire plus</button>
    </div>

         </div>
         <div >
    <p>Bienvenue a l'universite de Toukra</p>
 <motion.h2
       initial={{opacity:0,x:-70}}
       transition={{duration:1}}
       whileInView={{scale:1,opacity:1,x:0}}
       >L'Education est la cles de
        <motion.span
       initial={{opacity:0,x:-70}}
       transition={{duration:2}}
       whileInView={{scale:1,opacity:1,x:0}}
       className="ms-1">  success d'une vie reussie et pas d'excuse pour sa.</motion.span></motion.h2>
         <div className="mt-2">
         <Link to="/toukra-project/admission" className="bg-white py-[6px] md:py-[10px] px-[20px] font-medium text-sky-400">Programme</Link >
      <button>Lire plus</button>
    </div>

         </div>
   </Carousel>
  
</div>
</div>
</div>
  )
}

// ++++++another function export for the number of student and the number of our teacher++++++++++++++++++++==============================================

export  const Carousel1 = ()=>{
  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 466 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 466, min: 0 },
      items: 1
    }
  };
  return(
    <>
   <Carousel
    responsive={responsive1}
    // showDots={true}
    draggable={true}
    autoPlay={true}
    autoPlaySpeed={2000}
    infinite={true}
    keyBoardControl={false}
    renderButtonGroupOutside={false}
    removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
    >
  <div className="bg-red-300 shadow-xl text-center h-72  mx-3 md:mx-4 my-4 rounded-2xl font-extrabold text-white p-12">
    <FontAwesomeIcon icon={faUser} className="text-center text-7xl"/>
<p>11500 <br />
Etudiants+</p>
  </div>
  <div className="bg-green-300 shadow-2xl text-green-600  h-72   mx-3 md:mx-4 my-4 text-center rounded-2xl font-extrabold p-12">
  <FontAwesomeIcon icon={faCheck} className="text-center text-7xl"/>
<p>1023 <br />
Enseignants++</p>
  </div>
  <div className="bg-sky-300 shadow-xl text-center  h-72  mx-3  md:mx-4 my-4 font-extrabold rounded-2xl text-sky-400 p-12">
  <FontAwesomeIcon icon={faHome} className="text-center text-7xl"/>
  <p> 14 <br />
   Departements+</p>
  </div>
  <div className="bg-yellow-300 shadow-xl text-center  h-72 mx-3  md:mx-4 my-4 font-extrabold rounded-2xl text-blue-400 p-12">
  <FontAwesomeIcon icon={faExclamationCircle} className="text-center text-7xl"/>
<p>kalibe felix </p>
  </div>
  <div className="bg-gray-200 shadow-xl  h-72  text-center mx-3  md:mx-4 my-4 font-extrabold rounded-2xl text-black p-12">
  <FontAwesomeIcon icon={faTools} className="text-center text-7xl"/>
<p>kalibe felix </p>
  </div>
   </Carousel>
    </>
  )
}

export default Caroussel
