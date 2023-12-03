import {motion} from "framer-motion"
import Carousel from "react-multi-carousel";
import "./Flip.scss"
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Flip() {
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
  return (
    <div className=" bg-sky-400 mt-4 md:pb-12 md:pt-6 pb-8 pt-2">
      <div className=" md:flex md:mx-28 p-4 py-4">
        <div className="mx-2 md:text-left">
        <h3 className="md:text-4xl text-2xl  text-white font-extrabold">L'universite de Toukra </h3>
         <p className="md:text-xl text-gray-200 my-3 mx-1">L'universite de Toukra est une universite qui fait de l'apprentissage son credo et sa renommee.</p>
         <button className="bg-black text-white p-3 text-center">Decouvrir l'universite <FontAwesomeIcon icon={faArrowRight}/></button>
        </div>

        {/* ++++++++++++++++======================the temoignages of our student++++++++++================================== */}

        <div className="md:w-[500px] my-4 md:my-0 ">
        <h4 className=" text-white font-extrabold md:text-3xl mx-4 text-xl md:text-left">Reportages de nos Etudiants</h4>
        <Carousel 
        responsive={responsive}
        infinite={true}
  draggable={true}
  autoPlay={true}
  autoPlaySpeed={4000}
//   showDots={true}
  transitionDuration={500}
//   itemClass="carousel-item-padding-10-px"
  removeArrowOnDeviceType={["desktop","tablet","mobile"]}
        >
<div >
<p className="text-white md:text-xl text-md my-3 mx-4">Salut,moi ce Adele Orimadji et je suis etudiante a l'universite de Toukra,j'etudie la communication et mon reve c'est de devenir journaliste de Television. Rejoignez moi et etudions ensemble</p>
  <div className="flex items-center mx-4">
    <img src="/toukra-project/adele.jpg" alt="" className="w-16 bg-white rounded-full border h-16 object-fill"/>
    <p className="text-white font-bold mx-2">Adele Orimadji <span className="block font-normal text-sm">Etudiante</span></p>
  </div>
</div>
<div>
<p className="text-white md:text-xl text-md my-3 mx-4">Salut,moi ce Etienne Dingamnodji et je suis etudiant a l'universite de Toukra,j'etudie la Philosophie et mon reve c'est de devenir grand philosophe. Rejoignez nous et etudions ensemble.</p>
  <div className="flex items-center mx-4" >
    <img src="/toukra-project/togui.jpg" alt="" className="w-16 h-16 rounded-full border object-fill"/>
    <p className="text-white font-bold mx-2">Dingamnodji Etienne<span className="block font-normal text-sm">Etudiant</span></p>
    </div>
    </div>

    <div>
<p className="text-white md:text-xl text-md my-3 mx-4">Salut,moi ce Etienne Dingamnodji et je suis etudiant a l'universite de Toukra,j'etudie la Philosophie et mon reve c'est de devenir grand philosophe. Rejoignez nous et etudions ensemble.</p>
  <div className="flex items-center mx-4" >
    <img src="/toukra-project/temoin5.png" alt="" className="w-16 h-16 rounded-full border object-fill"/>
    <p className="text-white font-bold mx-2">Bianpambe Marcelin<span className="block font-normal text-sm">Etudiant</span></p>
    </div>
    </div>
<div>
    
<p className="text-white md:text-xl text-md my-3 mx-4">Salut,moi ce Koubeube Angele et je suis etudiante a l'universite de Toukra,j'etudie la science sociale et mon reve est de unir les tchadiens. Rejoignez nous et etudions ensemble.</p>
  <div className="flex items-center mx-4">
    <img src="/toukra-project/temoin3.webp" alt="" className="w-16 rounded-full bg-white border h-16"/>
    <p className="text-white font-bold mx-2">Koubeube Angele<span className="block font-normal text-sm">Etudiante</span></p>
  </div>
</div>
        </Carousel>
        </div>
        
      </div>
     
    </div>
  )
}


export const Flip1 =()=>{
    return(
<>
<div className="md:flex  md:mx-14 mx-2 -mt-14">
{/* ++++++++++++++++++++++++======================= the first flip cart+++++++++++++++++++++++++======================== */}
<motion.div
    initial={{scale:0.9}}
    transition={{duration:1}}
    whileHover={{scale:1}} className="flip-card rounded-3 ">
  <div className="flip-card-inner rounded-2 shadow">
    <div
    className="flip-card-front  rounded-2 ">
    <h1 className="otp1 font-extrabold"><strong>AXE 1</strong></h1>
    <h2>Enseignements</h2>
     <p>Basee sur la recherche l'universite de Toukra met l'accent 
      sur l'education et sa priorite est de mettre un point et que tout
       tchadien etant de loin ou de pres participe a l'education et la vie en societe.
      </p>
    </div>
    <div className="flip-card-back  rounded-2 ">
    <h1 className="otp2">Orientations</h1>
    <h2>Centres de conseils</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing
         elit. Placeat deleniti beatae aliquam et odit 
         suscipit veniam eligendi enim corporis reiciendis?</p>
         <button className="border bg-sky-400 p-3 rounded-xl">Suivez nous</button>
    </div>
    </div>
  </motion.div>

{/* ++++++++++++++++++++++++======================= the second flip cart +++++++++++++++++++++======================== */}
<motion.div
    initial={{scale:0.9}}
    transition={{duration:1}}
    whileHover={{scale:1}}
     className="flip-card  md:mx-2 my-0 md:my-0">
  <div className="flip-card-inner rounded-lg shadow-xl">
    <div className="flip-card-front  rounded-2 ">
    <h1 className="otp1 font-extrabold"><strong>AXE 2</strong></h1>
     <h2>Centres et Conseils</h2>
      <p>A l'universite vous trouverez des services qui permettrons
         de vous conseiller et de suivre le pourquoi faire et avoir 
         de l'impact sur le future et formant plus d'intellectuels et d'Homme travailleur.
     </p>
    </div>
    <div className="flip-card-back  rounded-lg ">
      <h1 className="otp2">Nos Formations</h1>
      <h2>Nos programmes</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing
         elit. Placeat deleniti beatae aliquam et odit 
         suscipit veniam eligendi enim corporis reiciendis?</p>
         <button className="border bg-sky-400 p-3 rounded-xl">Nos formations</button>
    </div>
  </div>
</motion.div>
{/* +++++++++++++++++++++++++++++++++ the three flipp card +++++++++++++++++++========================================== */}
<motion.div
    initial={{scale:0.9}}
    transition={{duration:1}}
    whileHover={{scale:1}}
     className="flip-card  rounded-2 ">
  <div className="flip-card-inner  rounded-2  shadow">
    <div className="flip-card-front  rounded-2 ">
    <h1 className="otp1 font-extrabold"><strong>AXE 3</strong></h1>
    <h2>Developpement</h2>
      <p>Etudiez a l'universite de Toukra c'est choisir d'etre intellectuel ?
        Car en procreant plus des grands hommes au Tchad elle forme 
        aussi des intellectuels internationale qui sont repartis sur le rang mondiale.
      </p>
    </div>
    <div className="flip-card-back  rounded-2 ">
      <h1 className="otp2">Bibliotheques</h1>
    <h2 > Lire plus avec nous</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing
         elit. Placeat deleniti beatae aliquam et odit 
         suscipit veniam eligendi enim corporis reiciendis?</p>
         <button className="border bg-sky-400 p-3 rounded-xl">Suivez nous</button>
    </div>
  </div>
</motion.div>
</div>
</>
    )
}

export default Flip
