// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook,faXTwitter,faWhatsapp,faInstagram } from "@fortawesome/free-brands-svg-icons"
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import "./Footer.scss"
import { Link } from "react-router-dom"
function Footer() {
  return (
    <div className="bg-gray-200 w-full mt-10">
    <div className="  md:flex justify-between md:px-16 px-4 py-4" id="footer">
      {/* _____________+++++++++++++++++++=============== the icon and the title of the footer_____________++++++++++++++++++=========== */}
      <div >
      <div className="flex items-center">
        <img src="/im6.png" alt="" className="xl:w-[12%] me-[2px] xl:h-[20%] w-10 object-cover" />
       <div>
       <h3 className="lg:text-2xl md:mt-[-1px] text-xl font-extrabold">Universite de<span className="text-sky-400"> Toukra</span></h3>
       <div className="divider  -ms-1 -mt-1">
       <img src="/drapeau1.png" alt="" className="xl:w-2 xl:h-3 w-2 h-3" />
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
        </ul>
      </div>
      <div>
        <h2>Autres liens</h2>
        <ul>
          <li>Bibliotheques de l'universitè</li>
          <li>Politique et Confidentialitè</li>
          <li>Ecoles Normales superieures</li>
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
       </ul>
      </div>
    </div>
    <hr className="border"/>
    <div className=" md:flex justify-between md:px-16 px-6">
    <p>Copyright &copy; 2023 Universite de Toukra, tous droits reserves.</p>
    <p>Developpez par <Link to="/devsoftware" className="text-sky-400 underline">DevSoftware Yahoulbo</Link></p>
    </div>
    </div>
  )
}

export default Footer
