import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faXTwitter,faWhatsapp,faInstagram } from "@fortawesome/free-brands-svg-icons"
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import "./Footer.scss"
import { Link } from "react-router-dom"
function Footer() {
  return (
    <div className="bg-gray-200 w-full ">
    <div className="  md:flex justify-between md:px-16 px-4 py-4" id="footer">
      {/* _____________+++++++++++++++++++=============== the icon and the title of the footer_____________++++++++++++++++++=========== */}
      <div >
      <div className="flex items-center">
        <img src="/toukra-project/im6.png" alt="" className="xl:w-[12%] me-[2px] xl:h-[20%] w-10 object-cover" />
       <div>
       <h3 className="lg:text-2xl md:mt-[-1px] text-xl font-extrabold">Universite de<span className="text-sky-400"> Toukra</span></h3>
       <div className="divider  -ms-1 -mt-1">
       <img src="/toukra-project/drapeau1.png" alt="" className="xl:w-2 xl:h-3 w-2 h-3" />
       </div>
       </div>
      </div>
      <p>Batîment du Senat, Universitè de <br /> Ndjamèna, Campus de Toukra, Ndjamèna Tchad.</p>
      </div>
      {/* ________________+++++++++++++++++++================= the main _______++++++++++++++++++++++++++========================== */}
      <div>
        <h2>installations et services</h2>
        <ul>
         <li>Centres de services et conseils</li>
         <li>service de sante universitaires</li>
         <li>Centre de Sante de nos etudiants</li>
         <li> Directions des Affaires</li>
         <li> Directions des Affaires</li>
        </ul>
      </div>
      <div>
        <h2>Autres liens</h2>
        <ul>
          <li>Bibliotheques de l'universitè</li>
          <li>Politique et Confidentialitè</li>
          <li>Ecoles Normales superieures</li>
          <li>Librairies de l'universitè</li>
          <li>Librairies de l'universitè</li>
        </ul>
      </div>
      <div>
       <h2>Facultes & Departements</h2>
       <ul>
        <li>Facultes de Sciences de l'Education</li>
        <li>Facultes de Sciences Humaines</li>
        <li>Facultes de Sciences Juridiques</li>
        <li>Facultes de Langues et Lettres</li>
        <li>Facultes d'Art et Communication</li>
       </ul>
      </div>
    </div>
    <div id="lastf">
      <div className="flex items-center md:gap-6 gap-5">
        <h2 >Suivez nous sur:</h2>
     <FontAwesomeIcon icon={faFacebook} className="text-xl text-sky-400"/>
      <FontAwesomeIcon icon={faXTwitter}className="text-xl text-sky-400"/>
    <a href="https://api.whatsapp.com/send?phone=9132021995&text=Salut%20Pourrais-je%20rejoindre%20le%20groupe%20de%20l'universite%20de%20Toukra!">  <FontAwesomeIcon icon={faWhatsapp} className="text-xl text-sky-400"/></a>
      <FontAwesomeIcon icon={faInstagram} className="text-xl text-sky-400"/>
     </div>
    <hr className="border"/>
    <div className=" md:flex justify-between md:px-16 px-6">
    <p>Copyright &copy;2023 <span className="font-medium">Universite de <span className="text-sky-400"> Toukra</span></span>, tous droits reserves.</p>
    <p>Powered by <Link to="/devsoftware" className="text-sky-400 underline">DevSoftware &copy;Group</Link></p>
    </div>
    </div>
    </div>
  )
}

export default Footer
