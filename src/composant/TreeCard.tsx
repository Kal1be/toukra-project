import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faClock,faLocation } from "@fortawesome/free-solid-svg-icons"
import "./card.scss"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function TreeCard() {
  return (
   <div>
     <div className="pt-10 pb-10" id="dounia">
        <div className="text-center">
            <h3 className="md:text-4xl text-3xl mt-3 font-extrabold">Les Evenements</h3>
        <p className="md:text-xl text-md font-bold text-gray-800 my-2 md:mx-28">Lorem ipsum dolordistinctio  consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, veritatis!</p></div>
        <Treecard1/>
        <Treecard2/>
        <Treecard3/>
    </div>
    <Final/>
   </div>
  )
}

export default TreeCard
// ++++++++++++++++++======================-___________________ the tree card ________++++++++++++++++++++++++++++++==============
export const Treecard1 = ()=>{
    return(
        <motion.div 
        initial={{opacity:0,x:-200}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        className=" bg-white shadow-2xl md:flex justify-between md:mx-24 mx-4 mt-6 rounded-xl" id="modifiant">
            <img src="/toukra-project/class2.jpg" alt="" className="md:w-[35%] w-[92%] mx-2 md:mx-0"/>
            <div className="md:mx-6 mx-4">
            <h3 className="font-bold text-yellow-400">27 avril,2024</h3>
           <h3 className="md:text-2xl font-extrabold text-lg">Remise de Diplome de finalisation pour nos Laureats</h3>
            <div className="flex justify-between ">
                <h2><FontAwesomeIcon icon={faClock} className="text-sky-400"/>12h:00 min</h2>
               <h2> <FontAwesomeIcon icon={faLocation} className="text-sky-400"/>Maison de la Femme</h2>
              
            </div>
            <p className="md:text-2xl font-medium text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aliquam minus iste tempora
             ipsam maiores expedita suscipit odit error, nulla ut ipsa soluta, quasi similique commodi facilis consequuntur pariatur. Cumque
              amet eligendi consequuntur mollitia voluptas delectus nobis doloribus nam numquam.</p>
        </div>
         </motion.div>
    )
}

// ______+++++++++++++++++++++================================= the treecard2__________++++++++++++++++++++++==========================

export const Treecard2 = ()=>{
    return(
        <motion.div 
        initial={{opacity:0,x:-200}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
         className=" bg-white shadow-2xl md:flex justify-between md:mx-24 mx-4 mt-10 rounded-xl" id="modifiant">
        <img src="/toukra-project/class3.jpg" alt="" className="md:w-[35%] w-[94%] mx-2 md:mx-0"/>
        <div className="md:mx-6 mx-4">
            <h3 className="font-bold text-yellow-400">27 Mars,2024</h3>
           <h3 className="md:text-2xl font-extrabold text-lg">

Des Concours organiser pour cette fin d'annee 2023-2024</h3>
            <div className="flex justify-between ">
                <h2><FontAwesomeIcon icon={faClock} className="text-sky-400"/>14h:00 min</h2>
               <h2> <FontAwesomeIcon icon={faLocation} className="text-sky-400"/>Maison de Culture</h2>
              
            </div>
            <p className="md:text-2xl font-medium text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquam corrupti
             dolorum eaque ipsa quisquam porro mollitia officia nam, repellat dignissimos blanditiis nulla hic
             quam voluptates iste suscipit aut error exercitationem deserunt. Obcaecati assumenda dolorem enim magni. Eius, facilis reiciendis.</p>
        </div>
     </motion.div>
    )
}
// _________________++++++++++++++++++++++++++++++++++++++++++ the treecard3____________+++++++++++++++++++++++==========================

export const Treecard3 = ()=>{
    return(
        <motion.div
        initial={{opacity:0,x:-200}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
          className=" bg-white shadow-2xl md:flex justify-between md:mx-24 mx-4 mt-10 rounded-xl" id="modifiant">
        <img src="/toukra-project/football.png" alt="" className="md:w-[35%] w-[92%] mx-2 md:mx-0"/>
        <div className="md:mx-6 mx-4">
            <h3 className="font-bold text-yellow-400">27 avril,2024</h3>
           <h3 className="md:text-2xl font-extrabold text-lg">
Championat entre l'universite de Toukra et celui de Gassi</h3>
            <div className="flex justify-between ">
                <h2><FontAwesomeIcon icon={faClock} className="text-sky-400"/>15h:30 min</h2>
               <h2> <FontAwesomeIcon icon={faLocation} className="text-sky-400"/>Avenue de Gaulle</h2>
              
            </div>
            <p className="md:text-2xl font-medium text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore voluptate nemo possimus iste culpa. Saepe, id
             perferendis excepturi obcaecati repellat labore tempore, maxime non fugiat aspernatur itaque? Porro amet quis cum alias molestias eveniet quasi,
              doloremque blanditiis asperiores, corrupti eum?</p>
        </div>
     </motion.div>
    )
}

// _________++++++++++++++++++++++++=========================== the final after footer of the page _____________++++++++++++++++++++++++=======================


export const Final =()=>{
    return(
        <motion.div
        initial={{opacity:0,scale:0.9}}
        transition={{duration:1}}
        whileInView={{opacity:1,scale:1}}
        className="mt-10 bg-white">
            <h3 className="md:text-4xl text-2xl  font-extrabold mx-6 text-center">Les Evenements a venir</h3>
            <p className="text-center md:text-xl text-md font-bold text-gray-800 my-2 md:mx-28">Suivez nos listes des elements a venir sur la mise a jour et du futures de l'universite de Toukra</p>
            <div className="md:flex  md:mx-6 mx-2 mt-8" >
                <div className="flex items-center">
                    <div className="mx-2">
                        <p className="md:w-16 md:h-16 h-16 w-16 bg-gray-200 flex items-center justify-center font-extrabold">12</p>
                        <p className="md:w-16 md:h-16 h-20 w-16 bg-sky-400 flex items-center justify-center font-extrabold text-white">Dec</p>
                    </div>
                    <div id="modifiante">
                        <h2 className="font-extrabold md:text-sm text-xl">Nouvelle mise a jour</h2>
                        <p className="text-sm font-medium">Voir plus a propos du nouvelle mise a jour du site et
                         voir les systemes qui seront implementer.</p>
                         <Link to="/mise" className="md:text-sm text-xl underline text-sky-400">Lire la suite <FontAwesomeIcon icon={faChevronRight} className="text-sm"/></Link>
                    </div>
                </div>
                {/* ______________+++++++++++++++++++ the second of the ____++++++++++++++++++++++++++ */}
                <div className="md:flex my-2">
                <div className="flex items-center">
                    <div className="mx-2">
                        <p className="md:w-16 md:h-16 h-16 w-16 bg-gray-200 flex items-center justify-center font-extrabold">17</p>
                        <p className="md:w-16 md:h-16 h-20 w-16 bg-sky-400 flex items-center justify-center font-extrabold text-white">Mars</p>
                    </div>
                    <div id="modifiante">
                        <h2 className="font-extrabold md:text-sm text-xl">Rencontre des dirigeants</h2>
                        <p className="text-sm font-medium">Une rencontre entre les dirigeants de l'universite est prevu pour mars 2024 avec le president de l'universite.</p>
                         <Link to="/mise" className="md:text-sm text-xl underline text-sky-400">Lire la suite <FontAwesomeIcon icon={faChevronRight} className="text-sm"/></Link>
                    </div>
                </div>
                </div>
                {/* ____________++++++++++++++++++++++ the three __________+++++++++++++++++++========== */}

                 <div className="md:flex my-2">
                <div className="flex items-center">
                    <div className="mx-2">
                        <p className="md:w-16 md:h-16 h-16 w-16 bg-gray-200 flex items-center justify-center font-extrabold">27</p>
                        <p className="md:w-16 md:h-16 h-20 w-16 bg-sky-400 flex items-center justify-center font-extrabold text-white">Jan</p>
                    </div>
                    <div id="modifiante">
                        <h2 className="font-extrabold md:text-sm text-xl">Depots en ligne</h2>
                        <p className="text-sm font-medium">Une nouvelle ere est lancer a Ndjamena la capitale selon les depots en ligne a l'universite de Toukra.</p>
                         <Link to="/mise" className="md:text-sm text-xl underline text-sky-400">Lire la suite <FontAwesomeIcon icon={faChevronRight} className="text-sm"/></Link>
                    </div>
                </div>
                </div>
                {/* _++++++++++++++++__________________++++++++++++++========== the four ++++++++++++++++___________ */}
                <div className="md:flex my-2">
                <div className="flex items-center">
                    <div className="mx-2">
                        <p className="md:w-16 md:h-16 h-16 w-16 bg-gray-200 flex items-center justify-center font-extrabold">23</p>
                        <p className="md:w-16 md:h-16 h-20 w-16 bg-sky-400 flex items-center justify-center font-extrabold text-white">April</p>
                    </div>
                    <div id="modifiante">
                        <h2 className="font-extrabold md:text-sm text-xl">Examen generale</h2>
                        <p className="text-sm font-medium">Une nouvelle est annoncer ce matin selon les media que tous les examens universitaires commencerons en juin et pour mettre fin a l'annee.</p>
                         <Link to="/mise" className="md:text-sm text-xl underline text-sky-400">Lire la suite <FontAwesomeIcon icon={faChevronRight} className="text-sm"/></Link>
                    </div>
                </div>
                </div>
            </div>
        </motion.div>
    )
}

