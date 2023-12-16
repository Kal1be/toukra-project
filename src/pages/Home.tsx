import Body from "../composant/Body"
import Caroussel from "../composant/Caroussel"
import Center from "../composant/Center"
import Header from "../composant/Header"
import Navbar from "../composant/Navbar"
import Flip, { Flip1 } from "../composant/Flip"
import Body1 from "../composant/Body1"
import TreeCard from "../composant/TreeCard"
import Cookies from "../composant/Cookies"
import Scroll from "../composant/Scroll"
import Footer from "../composant/Footer"
function Home() {
  return (
    <div>
  <Navbar/>
  <Header/>
  <Caroussel/>
  <Body/>
  <Flip/>
  <Flip1/>
  <Center/>
  <Body1/>
  <TreeCard/>
 <Cookies/>
 <Scroll/>
 <Footer/>
    </div>
  )
}

export default Home
