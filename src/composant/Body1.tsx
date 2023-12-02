import Carousel from "react-multi-carousel"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar,faBook,faClock} from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import "./image.scss"
import "./card.scss"
 const Body1 = () =>{
    const responsive ={
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 466 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 466, min: 0 },
            items: 1
          }
    }
return (
    <div className="md:mt-12 mt-8 py-3" id="dounia">
        <div className="text-center">
     <h3 className="font-extrabold md:text-4xl text-3xl mt-8">Explorer nos Cours</h3>
     <h2 className="text-xl md:font-medium text-gray-800 md:mx-8 md:my-2 mx-2">Voici en quelques sortes la listes de nos meilleures d'enseignement generale a l'universite de Toukra.Vous pouvez slider et voir la quel vous conviendras</h2>
        </div>
       <div className="mt-10 bg-gray-200  md:px-8 md:py-8 py-4 px-2" id="doublebtn">
       <Carousel
     responsive={responsive}
     draggable={true}
     autoPlay={true}
     autoPlaySpeed={5000}
     infinite={true}
     keyBoardControl={false}
     renderButtonGroupOutside={false}
     removeArrowOnDeviceType={[ "mobile"]}
    > 
        <MyCarousel/>
        <MyCarousel1/>
        <MyCarousel2/>
        <MyCarousel3/>
        <MyCarousel4/>
        <MyCarousel5/>
        <MyCarousel6/>
        <MyCarousel7/>
        <MyCarousel8/>
    </Carousel>
       </div>
    </div>
)
}

export default Body1
// +++++++++++++++++++++++++++++++++____________________++++++++++++++++ the mycarousel __________+++++++++++++++++++++++++=====================

export const MyCarousel =()=>{
    return(
         <div className="md:mx-2 shadow-xl rounded-lg">
        <motion.div
         initial={{scale:.9,opacity:0}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}
          className="  bg-white " id="mode2">
                <motion.img 
                src="/etudiant1.jpeg" alt="" className="w-full object-cover  h-[260px]"/>
                <div className="flex justify-between items-center px-2">
                <h3 className="text-xl font-bold">Droits Juridiques</h3>
                <div>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className=""/>
                </div>
                </div>
                <p className="text-xl mx-2">L'universite de Toukra offre une meilleur formation en Droits juridiques,elle
                 a formee a ce jour a compter plus de 12000 etudiant et qui est renommer grace a cette formation.</p>
                 <hr  className="my-2 mx-3"/>
                 <div className="flex justify-between mx-4 py-3">
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400"/>14 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400"/>14 Lecon</h2>
                 </div>
            </motion.div>
        </div>
    )
}

// ++++++++++++=====================_____________++++++++++++++++++++=========== the mycarousel1 of the image +______________++++++++++++++==========
export const MyCarousel1 =()=>{
    return(
        <div className="md:mx-2 rounded-lg shadow-lg">
            <motion.div
         initial={{scale:.9,opacity:0}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}className=" bg-white" id="mode2">
            <img src="/etudiant2.jpeg" alt="" className="w-full object-cover  h-[260px]"/>
            <div className="flex justify-between items-center px-2">
                <h3 className="text-xl font-bold">Sociologie</h3>
                <div>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className=""/>
                </div>
                </div>
                <p className="text-xl mx-2">L'universite de Toukra offre une meilleur formation en Droits juridiques,elle
                 a formee a ce jour a compter plus de 12000 etudiant et qui est renommer grace a cette formation.</p>
            <hr  className="my-2 mx-3"/>
                 <div className="flex justify-between mx-4 py-3">
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400"/>14 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400"/>14 Lecon</h2>
                 </div>
            </motion.div>

        </div>
    )
}
// +++++++++++++++_________________++++++++++++++++++++++++======================== the Mycarousel2 +++++++++++++____________++================
export const MyCarousel2 =()=>{
    return(
        <div className="md:mx-2 rounded-lg shadow-lg">
            <motion.div
         initial={{scale:.9,opacity:0}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}} className=" bg-white" id="mode2">
            <img src="/etudiant3.jpeg" alt="" className="w-full object-cover h-[260px]"/>
            <div className="flex justify-between items-center px-2">
                <h3 className="text-xl font-bold">Communication</h3>
                <div>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                </div>
                </div>
                <p className="text-xl mx-2">L'universite de Toukra offre une meilleur formation en Droits juridiques,elle
                 a formee a ce jour a compter plus de 12000 etudiant et qui est renommer grace a cette formation.</p>
            <hr  className="my-2 mx-3"/>
                 <div className="flex justify-between mx-4 py-3">
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400"/>25 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400"/>17 Lecon</h2>
                 </div>
            </motion.div>

        </div>
    )
}
// +++++++++++++++++++++++++++++++++____________________++++++++++++++++ the mycarousel3__________+++++++++++++++++++++++++=====================
export const MyCarousel3 =()=>{
    return(
        <div className="md:mx-2 rounded-lg shadow-lg">
            <motion.div
         initial={{scale:.9,opacity:0}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}
         className=" bg-white" id="mode2">
            <img src="/etudiant4.jpeg" alt="" className="w-full object-cover  h-[260px]"/>
            <div className="flex justify-between items-center px-2">
                <h3 className="text-xl font-bold">Geographie</h3>
                <div>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className=""/>
                </div>
                </div>
           <p className="text-xl mx-2">L'universite de Toukra offre une meilleur formation en Droits juridiques,elle
                 a formee a ce jour a compter plus de 12000 etudiant et qui est renommer grace a cette formation.</p>
            <hr  className="my-2 mx-3"/>
                 <div className="flex justify-between mx-4 py-3">
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400"/>32 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400"/>22 Lecon</h2>
                 </div>
            </motion.div>
        </div>
    )
}
// +++++++++++++++++++++++++++++++++____________________++++++++++++++++ the mycarousel4 __________+++++++++++++++++++++++++=====================
export const MyCarousel4 =()=>{
    return(
        <div className="md:mx-2 rounded-lg shadow-lg">
            <motion.div
         initial={{scale:.9,opacity:0}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}
          className=" bg-white" id="mode2">
            <img src="/etudiant5.jpeg" alt="" className="w-full object-cover  h-[260px]"/>
            <div className="flex justify-between items-center px-2">
                <h3 className="text-xl font-bold">Histoire</h3>
                <div>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className=""/>
                </div>
                </div>
               <p className="text-xl mx-2">L'universite de Toukra offre une meilleur formation en Droits juridiques,elle
                 a formee a ce jour a compter plus de 12000 etudiant et qui est renommer grace a cette formation.</p>
                <hr  className="my-2 mx-3"/>
                 <div className="flex justify-between mx-4 py-3">
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400"/>19 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400"/>16 Lecon</h2>
                 </div>
            </motion.div>
        </div>
    )
}
// +++++++++++++++++++++++++++++++++____________________++++++++++++++++ the mycarousel5 __________+++++++++++++++++++++++++=====================
export const MyCarousel5 =()=>{
    return(
        <div className="md:mx-2 shadow-xl rounded-lg ">
     <motion.div
         initial={{scale:.9,opacity:0}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}
         className=" bg-white" id="mode2">
            <img src="/etudiant6.jpeg" alt=""  className="w-full object-cover  h-[260px]"/>
            <div className="flex justify-between items-center px-2">
                <h3 className="text-xl font-bold">Englais</h3>
                <div>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className=""/>
                </div>
                </div>
               <p className="text-xl mx-2">L'universite de Toukra offre une meilleur formation en Droits juridiques,elle
                 a formee a ce jour a compter plus de 12000 etudiant et qui est renommer grace a cette formation.</p>
                <hr  className="my-2 mx-3"/>
                 <div className="flex justify-between mx-4 py-3">
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400"/>29 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400"/>17 Lecon</h2>
                 </div>
            </motion.div>
        </div>
    )
}
// ++++++++++++++++++++++++++++++++++___________++++++++++++++++++++++ the mycarousel6_______+++++++++++++++++++===============================

export const MyCarousel6 =()=>{
    return(
        <div className="md:mx-2 rounded-lg shadow-lg">
            <motion.div
         initial={{scale:.9,opacity:0}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}
           className=" bg-white" id="mode2">
            <img src="/etudiant7.jpeg" alt=""  className="w-full object-cover  h-[260px]"/>
            <div className="flex justify-between items-center px-2">
                <h3 className="text-xl font-bold">Anthropologie</h3>
                <div>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className=""/>
                    <FontAwesomeIcon icon={faStar} className=""/>
                </div>
                </div>
               <p className="text-xl mx-2">L'universite de Toukra offre une meilleur formation en Droits juridiques,elle
                 a formee a ce jour a compter plus de 12000 etudiant et qui est renommer grace a cette formation.</p>
                <hr  className="my-2 mx-3"/>
                 <div className="flex justify-between mx-4 py-3">
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400"/>28 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400"/>20 Lecon</h2>
                 </div>
            </motion.div>
        </div>
    )
}
// +++++++++++++++++++++++++++++++++____________________++++++++++++++++ the mycarousel7 __________+++++++++++++++++++++++++=====================

export const MyCarousel7 =()=>{
    return(
        <div className="md:mx-2 rounded-lg shadow-lg">
            <motion.div
         initial={{scale:0.9,opacity:0}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}
          className=" bg-white" id="mode2">
            <img src="/etudiant8.jpg" alt=""  className="w-full object-cover  h-[260px]"/>
            <div className="flex justify-between items-center px-2">
                <h3 className="text-xl font-bold">Arabes</h3>
                <div>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className=""/>
                </div>
                </div>
               <p className="text-xl mx-2">L'universite de Toukra offre une meilleur formation en Droits juridiques,elle
                 a formee a ce jour a compter plus de 12000 etudiant et qui est renommer grace a cette formation.</p>
                <hr  className="my-2 mx-3"/>
                 <div className="flex justify-between mx-4 py-3">
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400"/>22 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400"/>18 Lecon</h2>
                 </div>
            </motion.div>
        </div>
    )
}

// +++++++++++++++++++++++++++++++++____________________++++++++++++++++ the mycarousel8 __________+++++++++++++++++++++++++=====================
export const MyCarousel8 =()=>{
    return(
        <div className="md:mx-2 rounded-lg shadow-lg">
            <motion.div
         initial={{scale:0.9,opacity:0}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}
          className=" bg-white" id="mode2">
            <img src="/etudiant9.png" alt=""  className="w-full object-cover  h-[260px]"/>
            <div className="flex justify-between items-center px-2">
                <h3 className="text-xl font-bold">Education</h3>
                <div>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className=""/>
                </div>
                </div>
               <p className="text-xl mx-2">L'universite de Toukra offre une meilleur formation en Droits juridiques,elle
                 a formee a ce jour a compter plus de 12000 etudiant et qui est renommer grace a cette formation.</p>
                <hr  className="my-2 mx-3"/>
                 <div className="flex justify-between mx-4 py-3">
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400"/>20 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400"/>16 Lecon</h2>
                 </div>
            </motion.div>
        </div>
    )
}
// +++++++++++++++++++++++++++++++++____________________++++++++++++++++ the mycarousel9 __________+++++++++++++++++++++++++=====================
export const MyCarousel9 =()=>{
    return(
        <div className="md:mx-2 shadow-lg">
            <motion.div
         initial={{scale:0.9,opacity:0}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}
          className=" bg-white  rounded-2xl" id="mode2">
            <img src="/etudiant10.webp" alt=""  className="w-full object-cover  h-[260px]"/>
            <div className="flex justify-between items-center px-2">
                <h3 className="text-xl font-bold">Philosophie</h3>
                <div>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                    <FontAwesomeIcon icon={faStar} className=""/>
                </div>
                </div>
               <p className="text-xl mx-2">L'universite de Toukra offre une meilleur formation en Droits juridiques,elle
                 a formee a ce jour a compter plus de 12000 etudiant et qui est renommer grace a cette formation.</p>
                <hr  className="my-2 mx-3"/>
                 <div className="flex justify-between mx-4 py-3">
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400"/>24 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400"/>11 Lecon</h2>
                 </div>
            </motion.div>
        </div>
    )
}