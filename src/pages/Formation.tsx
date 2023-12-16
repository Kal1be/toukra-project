import Footer from "../composant/Footer"
import Header from "../composant/Header"
import "./formagtion.scss"

function Formation() {
  return (
    <div>
        <Header/>
        <div id="formation">

            {/* __+++++++++++++++++++++++ the element of the backgound_+++++++++++++++++++++++++--------------- */}

            <div className="absolute  bg-[#00000044] md:h-[85vh] h-[45vh] w-full items-center justify-center text-center md:pt-[13%] pt-[32%]">
           <div>
           <h2> Nos formation a l'universitè  de
                         Toukra</h2>
                         <p> L'universitè de Toukra est 
    une institution pluridisciplinaire 
     d'enseignement superieur qui promeut 
      l'excellence.Elle propose au sein de 
       ces differentes facultès,une large 
        éventail de formations en licence, 
         master et doctorat.</p>
           </div>
            </div>
        </div>
         {/* ______________________++++++++++++++++++++ the element of ++++++++++++++++++++++++++++___ */}
         <div className="md:flex justify-between text-center md:mx-6 relative -mt-12 ">
            {/* ++++++++++++++++++ the element of ______+++++++++++++++++++++++================ */}
         <div className="bg-white p-4 shadow-2xl md:w-96 w-[95%] my-2 md:my-0 md:mx-1 mx-2 rounded-2xl">
         <span className="font-bold text-xl text-sky-400">

<strong className="text-center font-extrabold text-2xl text-black">4</strong><br/>

Facultès
</span>
         </div>
         <div className="bg-white p-4 shadow-2xl md:w-96 w-[95%] my-2 md:my-0 md:mx-1 mx-2 rounded-2xl">
         <span className="font-bold text-xl text-sky-400">
                    
                    <strong className="text-center font-extrabold text-2xl text-black">14</strong><br/>

                    
                    Departements
                </span>
         </div>
         <div className="bg-white p-4 shadow-2xl md:w-96 w-[95%] my-2 md:my-0 md:mx-1 mx-2 rounded-2xl">
         <span className="font-bold text-xl text-sky-400">
            <strong className="text-center font-extrabold text-2xl text-black">323</strong><br/>
                     Enseignants</span>
         </div>
         <div className="bg-white p-4 shadow-2xl md:w-96 w-[95%] my-2 md:my-0 md:mx-1 mx-2 rounded-2xl">
         <span className="font-bold text-xl text-sky-400">
            <strong className="text-center font-extrabold text-2xl text-black">11519</strong><br/>
                     Etudiants</span>
         </div>
         </div>

         {/* __________+++++++++++++++++++ the element of the body_________+++++++++++++++++++++++++++++++++ */}
        <div className="md:flex items-center justify-center mt-4">
        <img src="/toukra-project/chapeau.jpg" alt="" className="md:w-[22%] w-[40%] mx-auto md:mx-1 flex"/>
         <div className="mx-7 my-2 md:my-0">
          <h2 className="md:text-6xl text-3xl text-center font-bold">Nos Facultés</h2>
        <p className="text-center md:text-2xl font-medium">L'universitè de Toukra dispose 
        d'une offre de formation complète <br/>
      qui couvre les principaux 
    domaines éducatifs </p></div>
        </div>
        {/* __________+++++++++++++++++++++++== the element of the university ________++++++++++++++++++++++++++ */}
        <div className="">
            <h2>Sciences Humaines,Sociales 
            et de l'Education</h2>
            <div className="">
           <div className="">
              <h3>Facultès des Sciences 
                 Humaines et Sociales</h3>
              <p>La Facultè des Sciences Humaines et 
                 Sociales propose des cycles de 
                formations de Licence et Master en 
              Anthropologie, Histoire,Geographie 
            Philosophie et Sociologie.Les 
          enseignements sont dispensès en 
        francais ou arabe. </p>
        <span><a>En savoir plus..</a></span></div>
            <div className="">
              <h3>Facultès de Sciences  de
              l'Education</h3>
              <p>La Facultè des Sciences de l'Education 
              propose des cycles de formation en 
           Licence et Master aux metiers de 
            l'Enseignement et de la récherche. Les formations 
           sont dispensés en francais et arabe. </p>
        <span><a>En savoir plus..</a></span>
      </div></div></div>
      <Footer/>
    </div>
  )
}

export default Formation
