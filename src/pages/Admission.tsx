import Header from "../composant/Header"
import './admission.scss'

function Admission() {
  return (
    <div>
      <Header/>
      <div className="md:flex md:py-6 py-2 md:mx-4 mx-2">
     <div>
      <div>
        <div className="mx-2">
          <h2 className="text-sky-400 text-2xl font-bold">Admissions</h2>
        <p >L'Universite de Toukra offrent une large facultés et des
           programmes comptant de la Licence au Master et un Certificat de Cours
           du Premier annèe au Licence, Postuler pour l'universite de Toukra pour plus d'information</p></div>
      </div>

      {/* ___________++++++++++++++++++++++++ the first element+++++++++++++++==============================-------_______ */}

      <div className="md:flex justify-between my-4">
        <div className="border mx-2 my-4">
        <h3 className="bg-red-300 text-center w-full font-medium text-white py-2">Formulaire de troisième Cycle</h3>
        <p className="mx-3 text-sm">L'Universite de Toukra offrent au etudiants du troisieme 
          cycles des programmes pour Master,PGD,PhD et 
          autres. Cliquer ici pour voir les programmes avant de Postuler.</p>
          <div className="flex justify-center">
          <button id="btn3">Programme du troisieme cycle</button>
          </div>
        </div>
        <div className="border mx-2 my-4">
        <h3 className="text-center w-full text-white font-medium py-2" id="fon">Diplomes et autres postulant</h3>
        <p className="mx-3 text-sm">L'Universite de Toukra offrent aux diplomes et des hauts 
          diplomes des Certificat de formations Inter/Intra
           transfers des Facultes et Prgrammes Special d'Admission</p>
           <div className="flex justify-center">
           <button id="btn2">Diploma et Postulant</button>
           </div>
          
        </div>
      </div>

      {/* __________+++++++++++++++==================== the element of second ___________+++++++++++++++++++++++++++========= */}

      <div className="md:flex justify-between my-4 rounded-xl">
     <div className="border mx-2 my-4">
  <h3 className=" text-center w-full font-medium text-white py-2" id="fon">DAC Formulaire</h3>
  <p className="mx-3 text-sm">La division environnementale et la lutte contre la secheresse 
    offrent une formation en Pre-ND,ND,HHD & des certificats,
    cliquer ci dessous pour postuler</p>
  <div className="flex justify-center">
  <button id="btn2">Enseignant Applicant</button>
  </div>
     </div>
     <div className="border mx-2 my-4 rounded-xl">
      <h3 className="bg-red-300 text-center w-full font-medium text-white py-2">SBRS Formulaire</h3>
      <p className="mx-3 text-sm">La faculte des etudes de base et de rattrappage
         propose des programmes de pre-diplomes
          aux etudiants qui souhaitent etre admis.
           cliquer ci-dessous pour postuler</p>
           <div className="flex justify-center">
           <button id="btn3">Cliquer pour applie</button>
           </div>
     </div>
      </div>
      {/* ___________++++++++++++============= the fistt++++++++++_________________________---======================= */}
     </div>
     {/* ______________++++++++++++++++=============== the offcanva________+++++++++++++++++++============= */}
     <div className="bg-blue-950 py-2 px-4 rounded-xl">
   <div>
    <h2 className="text-white font-bold pt-4">Questions ?</h2>
    <p className="text-sky-400 text-sm py-2">Si vous avez des questions concernant 
      des propos sur cette page. S'il vous
       plait sentez vous libre de nous contacter.</p>
       <h4 className="font-bold text-white">Web Management unit,Maison 205, <br />
          Devsoftware Yahoulbo ©2023. <br />
          Universite de Toukra <br />
           Ndjamena-Tchad</h4>
   </div>
   <div className="font-sm text-white py-4">
    <p>+23568499242</p>
    <p>universitetoukra@gmail.com</p>
   </div>
   <h2 className="font-bold text-white text-xl">Ouvre du Lundi au Vendredi</h2>
   <p className="text-sky-400">08:00 a 17:00</p>
   <button className="text-center bg-white w-full my-4  font-medium p-2 rounded-xl">Vous pouvez nous ecrire ici</button>
     </div>
    </div>
   

    </div>
  )
}

export default Admission
