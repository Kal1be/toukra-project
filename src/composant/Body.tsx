// import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import "./image.scss"

function Body() {

    // const [formState,setFormState] = useState({})


    // const handlechange =(event:React.InputHTMLAttributes<HTMLInputElement>)=>{
    //   setFormState({...formState,[event.target.name]:event.target.value})
    // }
    
    // const submithandler=(even:React.FormHTMLAttributes<HTMLFormElement>)=>{
    //   even.preventDefault()
    //   const config ={
    //     SecureToken:"22c031b6-3021-42da-8ec8-739d5f9c047f",
    //      To:"universitetoukra@yopmail.com",
    //      From:formState.email,
    //      Subject:"Universite de Toukra",
    //      Body:`le nom d'utilisateur est :${formState.name} et son message est ${formState.textarea}`
    //    }
    //   if(window.Email){
    //     window.Email.send(config).then(()=>{
    //       alert("email send succesfully")
    //     })
    //   }
    // }

    const handleSubmit =()=>{

    }
  return (
    <div className="md:flex" id="mode">
      <div className="xl:mt-8 my-4">
{/* ++++++++++++++++++=========__========================== the element of the body ++++++++++++++++++++++==================== */}
<div className="md:flex lg:w-[800px] xl:w-[900px] justify-between mx-1 md:mx-8">
        {/* __+++++++++++++++++=================the cap +++++++++++++============================ */}
      <motion.div 
      initial={{y:10,opacity:0}}
      transition={{duration:1}}
      whileInView={{y:0,opacity:1}}
       className="md:me-12 flex md:block justify-between my-4  md:my-0 w-full">
            <img src="/toukra-project/sky.png" alt="l'icon ne peut" className="w-16"/>
                 <div className="mx-2 md:mx-0">
                 <h4 className="font-bold md:text-xl text-xl">Enseignement E-Learning</h4>
                  <p className="md:text-lg md:font-sm text-sm text-justify">
                      L'universite de Toukra offre une apprentissage en ligne,grace au partenariat
                       avec l'universite Virtuelle du Tchad.

                   </p>
                 </div>
                </motion.div>
                {/* +++++++++++++++++++========================= the op +++++++++++++++================ */}
        <motion.div 
      initial={{y:10,opacity:0,scale:1}}
      transition={{duration:1}}
      whileInView={{y:0,opacity:1,scale:1}}
      className="md:me-10 w-full flex md:block justify-between my-4  md:my-0">
                <img src="/toukra-project/usersky.jpeg" alt="l'icon ne peut" className="w-16"/>
                <div className="mx-2 md:mx-0">
                <h4 className="font-bold  md:text-xl text-xl">Programme de premier
cycle</h4>
                 <p className="md:text-lg text-sm text-justify">L'université de Toukra produit plus de 20000 place chaque annèe pour accueillir les nouveaux étudiants.</p>
                </div>
                </motion.div>
      </div>

      {/* +++++++++==================================== the under app +++++++++++++++++==================== */}
      <div className=" lg:w-[800px] xl:w-[900px] md:flex justify-between  mx-2 my-4  md:mx-8">
        {/* __+++++++++++++++++=================the cap +++++++++++++============================ */}
      <motion.div 
      initial={{y:10,opacity:0}}
      transition={{duration:1.3}}
      whileInView={{y:0,opacity:1}}
      className="md:me-14 w-full flex  md:block justify-between my-4  md:my-0"
      >
            <img src="/toukra-project/cap.png" alt="l'icon ne peut" className="w-16"/>
           <div className="mx-2 md:mx-0">
           <h4 className=" md:text-xl text-xl font-bold">LVT/DIplome</h4>
                 <p className="md:text-lg text-sm text-justify">Maintenant pour ceux qui peuvent être disponible à l'espace de 2 ou 3 mois par ans pour étudier pour un Diploma.</p>
           </div>
                </motion.div>
                {/* +++++++++++++++++++========================= the op +++++++++++++++================ */}
        <motion.div 
      initial={{y:10,opacity:0}}
      transition={{duration:1}}
      whileInView={{y:0,opacity:1}}
      className="md:me-10 w-full flex md:block justify-between my-4  md:my-0"
      >
                <img src="/toukra-project/schoolsky.png" alt="l'icon ne peut" className="w-16"/>
                <div className="mx-2 md:mx-0">
                <h4 className="font-bold  md:text-xl text-xl">
La vie universitaire</h4>
                 <p className="text-sm md:text-lg text-justify">L'universite Toukra offre plus de 10000 logements pour ses etudiants et offre une meilleur centre de sante pour le bien de ces etudiants.</p>
                </div>
                </motion.div>
      </div>

      {/* ++++++++++++++++============================ the form validation ++++++++++++++++========================= */}
     {/* <form classname="border shadow p-4" onSubmit={submithandler}>
  <h3>Nous ecrire et avoir des informations a propos de nos differents programmes</h3>
  <div className="mb-lg-2  mb-1">
    <label htmlFor="exampleInputEmail1" className="form-label">Nom et Prenom</label>
    <input type="text" className="form-control" aria-describedby="emailHelp" id="input" name="name" defaultValue={formState.name || ""} onchange={handlechange}/>
  </div>
  <div className="mb-lg-2  mb-1">
    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" className="form-control" id="input" name="email" defaultValue={formState.email || ""} onchange={handlechange} />
  </div>
  <div className="mb-lg-2  mb-1" id="textererea">
    <label htmlFor="exampleInputPassword1" className="form-label">Votre message ici</label>
    <textarea name="textarea" id="texterea" classname="" cols={30} rows={7} placeholder="entrer votre message ici ..." value={formState.textarea} onchange={handlechange} defaultValue={""} />
  </div>
  <button type="submit" className="btn  mt-2">Envoyer </button>
</form> */}
      </div>
      <motion.form
      initial={{opacity:0,y:-10}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      onSubmit={handleSubmit} className="relative md:-top-28 xl:me-8  border p-4 mx-2 shadow-2xl rounded-2xl my-3 bg-white">
<h3 className="xl:text-2xl text-lg font-bold">Ecrivez-nous et savoir plus sur nos differents Programmes.</h3>
<div className="my-2">
  <label htmlFor="name" className="text-md font-medium ">Nom d'Utilisateur</label> 
 <div>
 <input type="text" placeholder="entrer votre nom" className="w-full border outline-none py-2 px-1 rounded-lg" /> 
 </div>
</div>
<div  className="my-2">
<label htmlFor="name"  className="text-md font-medium">Votre Email</label> 
 <div>
 <input type="text" placeholder="entrer votre Email" className="w-full border outline-none py-2 px-1 rounded-lg" /> 
 </div>
</div>
<div>
    <label htmlFor="text" className="text-md font-medium ">Entrer votre message</label>
    <textarea name="text" id="text"  cols={20} rows={7} className="w-full border outline-none rounded-2xl"></textarea>
</div>
<button className="w-full bg-sky-400 text-white p-2 my-2 rounded-md font-bold">Envoyer votre message <FontAwesomeIcon icon={faPaperPlane}/></button>
</motion.form>
    </div>
  )
}

export default Body
