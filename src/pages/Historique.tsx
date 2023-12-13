import React from 'react'
import Header from '../composant/Header'
import './historique.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook,faUniversity } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

function Historique() {
  return (
    <div>
      <Header/>
      <div>
        {/* ______________++++++++++++++++ the part of the image________+++++++++++++++++++++++++ */}
        <div id='badel'>
  <div id='badel1'>
<p className='text-center'>Historique de l'Universitè <br />
de Toukra</p>
  </div>
        </div>
        {/* _____________+++++++++++++++++++++======= the content of the element of body____________+++++++++++++ */}
        <div className='mx-4' id='doua'>
            <p className='my-2'>L'universitè de Toukra est une universitè de recherche du gouververnement
                 situer au sud à la sortie du capital 
                il est considerée par les autorités comme une universitè moderne, 
                le campus universitaire de Toukra abrite une centre de sante pour assurer le bien être des étudiants.
            </p>
            <p className='my-2'>Il a été inaugurer en 2011 par l'ancien president Idriss Deby Itno pour accueillir la facultès des
                 sciences humaines et sociales et la facultes des langues,lettres,arts et Communication,reparties en 14 departements.</p>
        </div>
        {/* __________++++++++++++++++===== te after element_____+++++++++++++++++++++++++++++ */}
        <div>
            <motion.div
            initial={{opacity:0,x:-100}} 
            whileInView={{opacity:1,x:0}}
            className='bg-blue-100 p-4 m-4'>
                <h3 className='text-center md:text-4xl text-2xl text-gray-800 font-bold'>Le doyen de l'education</h3>
                <h3 className='text-center md:text-3xl text-xl font-bold text-sky-400 my-2'>Message de Bienvenue</h3>
                <p id='doua'>Au nom des membres du personnel de la Faculté de l'éducation, je vous souhaite la bienvenue sur
                     notre page web. Nous nous engageons a l'excèllence dans l'éducation, l'érudition, la motivation
                      et nous inspirons par l'exemple. Nous travaillons avec diligence avec nos étudiants pour
                       decouvrir comment transformer leurs interêts en carrières réussies. Dans notre universitè, 
                       vous trouverez une facultè d'éducation riche en recherche et axèe sur l'innovation et l'impact.
                        Chacun de nos diplomes à une histoire unique à raconter 
                    et continue de se renseigner, d'innover et d'inspirer. Nous vous invitons
                     a nous rejoindre et a célèbrer la joie d'apprendre.</p>
            </motion.div>
            <div className='mx-3 my-2'>
                <h3 className='text-3xl text-sky-400 font-bold'>Universite</h3>
                <h4 className='text-xl font-medium my-2'>Mission, Vision et Philosophie</h4>
                <div className='md:flex justify-between'>
                    <motion.div
                     initial={{opacity:0,x:-100}} 
                     whileInView={{opacity:1,x:0}} className='bg-blue-100 p-4 mx-1 my-2'>
                   <h2 className='text-2xl font-bold text-sky-400'> <FontAwesomeIcon icon={faBook}/>Mission</h2>
                   <p id='doua'>Repousser les frontières de l'apprentissage et innover,
                     par l'enseignement, la recherche et la diffusion de connaissances
                      de la plus haute qualité; ètablir et favoriser l'integration nationale
                       et internationale, le developpement et la promotion des traditions et cultures
                       africaines; produire une force humaine de haut niveau et renforcer
                     le renforcement des capacitès par le recyclage, afin de repondre aux besoins 
                     et aux defis de la zone du Tchad et du reste du monde.</p>
                    </motion.div>
                    <motion.div
                     initial={{opacity:0,x:100}} 
                     whileInView={{opacity:1,x:0}}
                      className='bg-blue-100 p-4 mx-1 my-2'>
                        <h2 className='text-2xl font-bold text-sky-400'><FontAwesomeIcon icon={faUniversity}/>Vision</h2>
                        <p id='doua'>La facultè d'éducation doit être une faculté de classe mondiale comparable 
                            à toute autre,engagèe dans la transmission des connaissance contemporaines,
                             en utilisant des de haute qualité et des approches multidisplinares, aux 
                             hommes et aux femmes de toutes races, ainsi qu'en génèrant de nouvelles
                             idèes et pratiques intellectuelles pertinentes pour les besoins de sa 
                             communaute immediate du tchad et le monde en génèrale .</p>
                    </motion.div>
                </div>
                <div className='bg-blue-100 p-4 mx-1 my-4'>
                  <h2 className='text-2xl font-bold text-sky-400'><FontAwesomeIcon icon={faBook}/>Philosophie</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Historique
