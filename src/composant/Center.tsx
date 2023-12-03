import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

function Center() {
  return (
    <div className="bg-white md:-mt-36 mt-10 md:px-12 px-4">

        <div className="md:flex justify-between w-sreen">
            <div>
              <div className="absolute"  id="animate">
              <img src="/toukra-project/icon.png" alt=""/>
                <p className="text-center bg-sky-400 text-white font-extrabold w-24 p-3 rounded-full z-20">Former<br />
                1M+</p>
              </div>
                <motion.img
                initial={{scale:1}}
                transition={{duration:1}}
                whileHover={{scale:1}}
                src="/toukra-project/etudian.jpg" alt=""  className="lg:w-[90%] xl:h-[700px] md:h-[700px] h-[450px]"/>
            </div>
            <div className="md:w-[60%] lg:mt-10 mt-4" id="mode1">
            <h3 className="xl:text-5xl font-extrabold text-xl">
            Nous sommes une institution d'apprentissage et d'expertisme</h3>
            <h6 className="text-sky-400 xl:text-4xl text-md font-bold lg:mt-6 mt-2">50ans d'expertiste et d'experience</h6>
             <motion.p
             initial={{opacity:0,y:-10}}
             transition={{duration:1}}
             whileInView={{opacity:1,y:0,scale:1}}
             className="xl:text-2xl text-lg font-md text-justify">
               
             "L'Université de Toukra est une grande Université comparable
              à tout autre Université, engager dans la transmission de la
               connaissance contemporaine, en utilisant des installations
                et methodes de haut qualité et des appproches multi-disciplinaires,
                 permettant hommes et femmes de toutes races,ainsi que la generation
                  future d'avoir des nouvelles idees et pratiques intellectuelles
                   pertinentes repondant aux besoins de la communaute du Tchad et du monde en general.
              Notre mission est que chaque étudiant réfléchisse de manière critique,
              raisonne avec sagesse et agisse avec humanité tout en cultivant une
              vie pleine de sens". 
             </motion.p>
            <h6 className="mt-2 font-bold md:text-2xl text-lg my-3"><FontAwesomeIcon icon={faPhone} className="text-sky-400"/> contact: <span className="md:text-xl text-md font-md">+235 66 93 93 77 </span> </h6>
            {/* <button className="bg-sky-400 text-white text-xl rounded-xl  py-2 px-6">Lire plus</button> */}
            </div>
        </div>
      
    </div>
  )
}

export default Center
