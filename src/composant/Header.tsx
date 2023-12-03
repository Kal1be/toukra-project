import "./header.scss"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose} from "@fortawesome/free-solid-svg-icons"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

function Header() {
  const [open,setOpen] = useState(true)
  const [navbar,setNavbar] = useState(true)

  useEffect(()=>{
const handleScroll = ()=>{
  if(window.pageYOffset > 450 && navbar){
    setNavbar(false)
  }
  else if (window.pageYOffset<=450 !==navbar){
    setNavbar(true)
  }
 
}
window.addEventListener("scroll",handleScroll)
return()=>{
  window.removeEventListener("scroll",handleScroll)
}
  },[navbar])
  return (
    <div>
      <div className="flex justify-between items-center md:py-2 py-1 px-2 font-bold" id="headerNav">
      <div className="flex justify-between w-screen items-center">

        {/*_+++++++++++++++=========================== the navbar and the element+++++++++++++++++++=================================================*/}

      <div className="flex items-center">
        <img src="/toukra-project/im6.png" alt="" className="xl:w-[14%] me-[2px] xl:h-[20%] w-10 object-cover" />
       <div>
       <h3 className="lg:text-2xl md:mt-[-1px] text-xl font-extrabold">Universite de<span className="text-sky-400"> Toukra</span></h3>
       <div className="divider  -ms-1 -mt-1">
       <img src="/toukra-project/drapeau1.png" alt="" className="xl:w-2 xl:h-3 w-2 h-3" />
       </div>
       </div>
      </div>

      {/* _++++++++++++++++++++++========================the start of the bouton hamburger++++++++++++++++++++======================================= */}

     <div onClick={()=>{
      setOpen(false)
     }} className=" bg-sky-400 px-1 py-1 mx-1" id="btn">
     <div className="btn"></div>
      <div className="btn"></div>
      <div className="btn"></div>
      </div>
     </div>

      {/* +++++++++++++++++++++++========================the start of the element ul and the dropdown+===========================+++++++++++++++++++++ */}

      <motion.div>
        <ul className="xl:w-[750px] md:w-[530px] md:flex justify-between" id={open?"hid":"hid active"}>
          <FontAwesomeIcon icon={faClose} className="icon text-2xl" onClick={()=>{
            setOpen(true)
          }}/>
            <li> <Link to="/toukra-project">Accueil</Link>

     {/* +++++++++++++++++++++============================== the dropdown menu +++++++++++++++++++++++++++++++++++++++================================ */}

            </li>
            <li  className="dropdown_1"><motion.span initial={{scale:1}} whileHover={{scale:1.5}}>Facultes </motion.span>
            <div className="md:w-full shadow-lg" id="dropdown">
                <div className="md:flex justify-between">
                  <div>
                    <h2>Faculte de Science Humaine</h2>
                    <ul className="dropdown_ul">
                      <li>Departement d'Englais</li>
                      <li>Departement de Geographie</li>
                      <li>Departement d'Histoire</li>
                      <li>Departement de Communication</li>
                      <li>Departement de Philosophie</li>
                    </ul>
                  </div>
                  <div>
                  <h2>Faculte de Science Politique</h2>
                    <ul className="dropdown_ul">
                      <li>Departement d'Anthropologie</li>
                      <li>Departement de Sociologie</li>
                      <li>Departement de Droits Juridiques</li>
                      <li>Departement de l'Education</li>
                      <li>Departement de Philosophie</li>
                    </ul>
                  </div>
                  <div>
                  <h2>Faculte de Science d'Education</h2>
                    <ul className="dropdown_ul">
                      <li>Departement d'Englais</li>
                      <li>Departement de Geographie</li>
                      <li>Departement d'Histoire</li>
                      <li>Departement de Communication</li>
                      <li>Departement de Philosophie</li>
                    </ul>
                  </div>
                  <div>
                  <h2>Faculte de Droits </h2>
                    <ul className="dropdown_ul">
                      <li>Departement d'Englais</li>
                      <li>Departement de Geographie</li>
                      <li>Departement d'Histoire</li>
                      <li>Departement de Communication</li>
                      <li>Departement de Philosophie</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown_2"><motion.span>A Propos</motion.span>
            <div className="" id="dropdown1">
            <ul>
              <li>Privacy et Confidentiale</li>
              <li>Centre de Conseil et d'orientation</li>
              <li>Bureau generale</li>
              <li>Service d'accueil de l'universite</li>
              <li>Gestionaire et Chef en control</li>
            </ul>
            </div>
            </li>
            <li><motion.span>Journal </motion.span></li>
            <li><motion.span>Nouvelles</motion.span></li>
            <li className="dropdown_3"><motion.span>Bibliotheques</motion.span>
            <div className="" id="dropdown2">
            <ul>
              <li>Privacy et Confidentiale</li>
              <li>Centre de Conseil et d'orientation</li>
              <li>Bureau generale</li>
              <li>Service d'accueil de l'universite</li>
              <li>Gestionaire et Chef en control</li>
            </ul>
            </div>
            </li>
        </ul>
      </motion.div>
    </div>

    {/* -===============================the srink navbar it fixe when the top reach -150px_________+=================================== */}
     <motion.div
     initial={{opacity:0}}
     transition={{duration:1}}
     whileInView={{opacity:1}}
     id={navbar? "nav":"header"}>

     <div className="flex justify-between items-center border shadow-2xl md:py-1 py-2 px-2 font-bold bg-gray-200" id="headerNav">
      <div className="flex justify-between w-screen items-center">

        {/*_+++++++++++++++=========================== the navbar and the element+++++++++++++++++++=================================================*/}

        <div className="flex items-center">
        <img src="/toukra-project/im6.png" alt="" className="xl:w-[14%] me-[2px] xl:h-[20%] w-10 object-cover" />
       <div>
       <h3 className="lg:text-2xl md:mt-[-1px] text-xl font-extrabold">Universite de<span className="text-sky-400"> Toukra</span></h3>
       <div className="divider -ms-1 -mt-1">
       <img src="/toukra-project/drapeau1.png" alt="" className="xl:w-2 xl:h-3 w-2 h-3" />
       </div>
       </div>
      </div>


      {/* _++++++++++++++++++++++========================the start of the bouton hamburger++++++++++++++++++++======================================= */}

     <div onClick={()=>{
      setOpen(false)
     }}
     className=" bg-sky-400 px-1 py-1 mx-1" id="btn">
     <div className="btn"></div>
      <div className="btn"></div>
      <div className="btn"></div>
      </div>
     </div>

      {/* +++++++++++++++++++++++========================the start of the element ul and the dropdown+===========================+++++++++++++++++++++ */}

      <motion.div>
        <ul className="xl:w-[750px] md:w-[530px] md:flex justify-between" id={open?"hid":"hid active"}>
          <FontAwesomeIcon icon={faClose} className="icon text-2xl" onClick={()=>{
            setOpen(true)
          }}/>
            <li>Accueil
     {/* +++++++++++++++++++++============================== the dropdown menu +++++++++++++++++++++++++++++++++++++++================================ */}
            </li>
            <li  className="dropdown_1"><motion.span>Facultes</motion.span>
            <div className="md:w-full shadow-lg" id="dropdown">
                <div className="md:flex justify-between">
                  <div>
                    <h2>Faculte de Science Humaine</h2>
                    <ul className="dropdown_ul">
                      <li>Departement d'Englais</li>
                      <li>Departement de Geographie</li>
                      <li>Departement d'Histoire</li>
                      <li>Departement de Communication</li>
                      <li>Departement de Philosophie</li>
                    </ul>
                  </div>
                  <div>
                  <h2>Faculte de Science Politique</h2>
                    <ul className="dropdown_ul">
                      <li>Departement d'Anthropologie</li>
                      <li>Departement de Sociologie</li>
                      <li>Departement de Droits Juridiques</li>
                      <li>Departement de l'Education</li>
                      <li>Departement de Philosophie</li>
                    </ul>
                  </div>
                  <div>
                  <h2>Faculte de Science d'Education</h2>
                    <ul className="dropdown_ul">
                      <li>Departement d'Englais</li>
                      <li>Departement de Geographie</li>
                      <li>Departement d'Histoire</li>
                      <li>Departement de Communication</li>
                      <li>Departement de Philosophie</li>
                    </ul>
                  </div>
                  <div>
                  <h2>Faculte de Droits </h2>
                    <ul className="dropdown_ul">
                      <li>Departement d'Englais</li>
                      <li>Departement de Geographie</li>
                      <li>Departement d'Histoire</li>
                      <li>Departement de Communication</li>
                      <li>Departement de Philosophie</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown_2"><motion.span>A Propos</motion.span>
            <div className="" id="dropdown1">
            <ul>
              <li>Privacy et Confidentiale</li>
              <li>Centre de Conseil et d'orientation</li>
              <li>Bureau generale</li>
              <li>Service d'accueil de l'universite</li>
              <li>Gestionaire et Chef en control</li>
            </ul>
            </div>
            </li>
            <li><motion.span>Journal </motion.span></li>
            <li><motion.span>Nouvelles</motion.span></li>
            <li className="dropdown_3"><motion.span>Bibliotheques</motion.span>
            <div className="" id="dropdown2">
            <ul>
              <li>Privacy et Confidentiale</li>
              <li>Centre de Conseil et d'orientation</li>
              <li>Bureau generale</li>
              <li>Service d'accueil de l'universite</li>
              <li>Gestionaire et Chef en control</li>
            </ul>
            </div>
            </li>
        </ul>
      </motion.div>
    </div>

     </motion.div>
   
    </div>
  )
}

export default Header
