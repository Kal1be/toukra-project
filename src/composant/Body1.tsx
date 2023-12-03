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
     <h3 className="font-extrabold md:text-4xl text-3xl md:mt-8 mt-3">Explorer nos Cours</h3>
     <h2 className="text-xl md:font-medium text-gray-800 md:mx-8 md:my-2 mx-2">Voici en quelques sortes la listes de nos meilleures d'enseignement generale a l'universite de Toukra.Vous pouvez slider et voir la quel vous conviendras</h2>
        </div>
       <div className="md:mt-10 mt-5 md:px-8 md:py-8 py-2 px-2" id="doublebtn">
       <Carousel
     responsive={responsive}
     draggable={true}
    //  autoPlay={true}
    //  autoPlaySpeed={8000}
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
         initial={{scale:.9}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}
          className="  bg-white " id="mode2">
                <motion.img 
                src="/toukra-project/etudiant1.jpeg" alt="" className="w-full object-cover  md:h-[260px] h-[230px]"/>
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
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400 text-lg mx-1"/>14 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400 text-lg mx-1"/>14 Lecon</h2>
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
         initial={{scale:.9}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}className=" bg-white" id="mode2">
            <img src="/toukra-project/etudiant2.jpeg" alt="" className="w-full object-cover  md:h-[260px] h-[230px]"/>
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
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400 text-lg mx-1"/>14 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400 text-lg mx-1"/>14 Lecon</h2>
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
         initial={{scale:.9}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}} className=" bg-white" id="mode2">
            <img src="/toukra-project/etudiant3.jpeg" alt="" className="w-full object-cover md:h-[260px] h-[230px]"/>
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
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400 text-lg mx-1"/>25 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400 text-lg mx-1"/>17 Lecon</h2>
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
         initial={{scale:.9}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}
         className=" bg-white" id="mode2">
            <img src="/toukra-project/etudiant4.jpeg" alt="" className="w-full object-cover  md:h-[260px] h-[230px]"/>
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
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400 text-lg mx-1"/>32 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400 text-lg mx-1"/>22 Lecon</h2>
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
         initial={{scale:.9}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}
          className=" bg-white" id="mode2">
            <img src="/toukra-project/etudiant5.jpeg" alt="" className="w-full object-cover  md:h-[260px] h-[230px]"/>
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
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400 text-lg mx-1"/>19 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400 text-lg mx-1"/>16 Lecon</h2>
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
         initial={{scale:.9}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}
         className=" bg-white" id="mode2">
            <img src="/toukra-project/etudiant6.jpeg" alt=""  className="w-full object-cover  md:h-[260px] h-[230px]"/>
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
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400 text-lg mx-1"/>29 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400 text-lg mx-1"/>17 Lecon</h2>
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
         initial={{scale:.9}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}
           className=" bg-white" id="mode2">
            <img src="/toukra-project/etudiant7.jpeg" alt=""  className="w-full object-cover  md:h-[260px] h-[230px]"/>
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
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400 text-lg mx-1"/>28 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400 text-lg mx-1"/>20 Lecon</h2>
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
         initial={{scale:0.9}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}
          className=" bg-white" id="mode2">
            <img src="/toukra-project/etudiant8.jpg" alt=""  className="w-full object-cover  md:h-[260px] h-[230px]"/>
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
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400 text-lg mx-1"/>22 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400 text-lg mx-1"/>18 Lecon</h2>
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
         initial={{scale:0.9}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}
          className=" bg-white" id="mode2">
            <img src="/toukra-project/etudiant9.png" alt=""  className="w-full object-cover  md:h-[260px] h-[230px]"/>
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
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400 text-lg mx-1"/>20 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400 text-lg mx-1"/>16 Lecon</h2>
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
         initial={{scale:0.9}}
         transition={{duration:1}}
         whileInView={{scale:1,opacity:1}}
          className=" bg-white  rounded-2xl" id="mode2">
            <img src="/toukra-project/etudiant10.webp" alt=""  className="w-full object-cover  md:h-[260px] h-[230px]"/>
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
                    <h2><FontAwesomeIcon icon={faClock} className="text-sky-400 text-lg mx-1"/>24 Semaines</h2>
                    <h2><FontAwesomeIcon icon={faBook} className="text-sky-400 text-lg mx-1"/>11 Lecon</h2>
                 </div>
            </motion.div>
        </div>
    )
}