import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faXTwitter,faWhatsapp,faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faSignOut ,faFileWord} from "@fortawesome/free-solid-svg-icons" 
function Navbar() {
  return (
    <div className="md:flex justify-between py-1 items-center bg-sky-400 text-white" id="myheader">
      <div className="flex justify-between w-56 text-xl font-bold py-3 md:px-4 px-2 cursor-pointer">
      <FontAwesomeIcon icon={faFacebook}/>
      <FontAwesomeIcon icon={faXTwitter}/>
      <FontAwesomeIcon icon={faWhatsapp} />
      <FontAwesomeIcon icon={faInstagram}/>
      </div>
     {/* <div className="flex items-center justify-between">
     <button className="border hover:bg-sky-400 py-1 my-1 mx-1 md:px-8 px-6 text-md bg-white text-black font-small hover:text-white">Documents</button>
      <h2 className="font-medium cursor-pointer mx-3">
           Programmes
        </h2>
        <h2 className="font-medium cursor-pointer">
           Admission
        </h2>
     </div> */}
      <div>
      
       <div className="md:flex justify-between items-center md:w-[500px] md:px-6 ">
       
        <button className="border hover:bg-sky-400 py-1 my-1 mx-1 md:px-8 px-6 text-md bg-white text-black font-small hover:text-white">Contactez-Nous</button>
       <div className="flex justify-between md:text-md text-md md:w-56 w-64 my-1 md:py-0 py-2 mx-2">

       <h2 className="font-small cursor-pointer hover:text-yellow-300">
            <FontAwesomeIcon icon={faSignOut} className="px-1"/>Se Connecter
        </h2>
        <h2 className="font-small cursor-pointer hover:text-yellow-300">
            <FontAwesomeIcon icon={faFileWord}  className="px-1"/>Postuler
        </h2>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Navbar
