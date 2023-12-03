import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faHome,faCheck, faExclamationCircle, faTools } from "@fortawesome/free-solid-svg-icons";
import "./carousel.scss"
import { motion } from "framer-motion";
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
//     <Carousel
//   responsive={responsive}
//   infinite={true}
//   draggable={true}
//   autoPlay={true}
//   autoPlaySpeed={4000}
//   itemClass="carousel-item-padding-10-px"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
// //  showDots={true}
//   // swipeable={false}
//   // draggable={false}
//   // showDots={true}
//   // responsive={responsive}
//   // ssr={true} // means to render carousel on server-side.
//   // infinite={true}
//   // // autoPlay={this.props.deviceType !== "mobile" ? true : false}
//   // autoPlaySpeed={1000}
//   // keyBoardControl={true}
//   // customTransition="all .5"
//   // transitionDuration={500}
//   // containerClass="carousel-container"
//   // removeArrowOnDeviceType={["tablet", "mobile"]}
//   // // deviceType={this.props.deviceType}
//   // dotListClass="custom-dot-list-style"
//   // itemClass="carousel-item-padding-40-px"
// >
//   <div className="my-image">
//     <div className="my-image">
//     <div className=" flex justify-center absolute  text-white  font-bold  items-center"  id="div">
//     <div className="flex items-center text-center">
//  <div>
//         <p>Bienvenue a l'universite de Toukra</p>
//       <motion.h2
//        initial={{opacity:0,x:-70,scale:0.8}}
//        transition={{duration:1}}
//        whileInView={{scale:1,opacity:1,x:0}}
        
//         >
//             <motion.h2
//             >L'Education est la cles du success d'une nation et pensee innovative</motion.h2>
//             </motion.h2>
//             <motion.button
//             initial={{opacity:0,x:-100}}
//             transition={{duration:1}}
//             whileInView={{scale:1,opacity:1,x:0}}
//              >Programmes</motion.button>
//   </div>
//  </div>
//   </div>

//   <Image/>
//     </div>
//   </div>
//   <div>

// {/* ____________++++++++++++++++++++++++++++++++++++++ ============= the first element _+++++++++++++______________++++++++++++++++++++++++========= */}

// <div className="my-image">
// <div className=" flex justify-center absolute  text-text-white  font-bold  items-center " id="div">
// <div className="flex items-center text-center  ">
//  <div>
//         <p>Bienvenue a l'universite Toukra</p>
//       <motion.h2
//        initial={{opacity:0,y:-70,scale:0.8}}
//        transition={{duration:1}}
//      whileInView={{scale:1,opacity:1,y:0}}
//       >
//         L'Education est la cles de success d'une vie reussie.
//             </motion.h2>
//             <motion.button
//             initial={{opacity:0,x:-100}}
//             transition={{duration:1}}
//             whileInView={{scale:1,opacity:1,x:0}}
//              >Programmes</motion.button>
//   </div>
//  </div>
//   </div>


  
// <Image1/>
// </div>
//   </div>

// {/* ++++++++++++++++++++==================the second cont +++++++++++++++++=========================_______________+++++++++++++++++++++++ */}
 
//   <div className="my-image">
//   <div className=" flex justify-center absolute  text-white  font-bold  items-center  " id="div">
//   <div className="flex items-center text-center ">
//  <div>//         <p>Bienvenue devant E-learning</p>

//       <motion.h2
//        initial={{opacity:0,x:70,scale:0.8}}
//        transition={{duration:1}}
//        whileInView={{scale:1,opacity:1,x:0}}
//         >
//             <motion.h2
//             >Mahamat Saleh Haggar vous souhaite la bienvenue</motion.h2>
//             </motion.h2>
//             <motion.button
//             initial={{opacity:0,x:-100}}
//             transition={{duration:1}}
//             whileInView={{scale:1,opacity:1,x:0}}
//              >Programmes</motion.button>
//   </div>
//  </div>
//   </div>
//   {/* +++++++++++++++++++++====================== the four content ++++++++++++++++++++++++++++============================= */}
 
//   <Image3/>
//  </div>
// </Carousel>''

<div className="back">
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
       transition={{duration:4}}
       whileInView={{scale:1,opacity:1,x:0}}
       className="ms-1">d'une nation et pensee innovative</motion.span></motion.h2>
         <div>
      <button>Programme</button>
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
       transition={{duration:4}}
       whileInView={{scale:1,opacity:1,x:0}}
       className="ms-1">a l'universite</motion.span></motion.h2>
         <div>
      <button>Programme</button>
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
       transition={{duration:4}}
       whileInView={{scale:1,opacity:1,x:0}}
       className="ms-1">  success d'une vie reussie et pas d'excuse</motion.span></motion.h2>
         <div>
      <button>Programme</button>
      <button>Lire plus</button>
    </div>

         </div>
   </Carousel>
  
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
