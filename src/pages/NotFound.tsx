
import Header from '../composant/Header'
import Scroll from '../composant/Scroll'

function NotFound() {
  return (
    <div>
        <Header/>
    <div className='my-28'>
      <p className='text-center text-4xl'>OOPS! Desolee</p>
      <p className=' text-2xl font-bold text-center text-red-500'>Le site est en maintenace contacter nous sur le <span className='text-green-400'> +2349132021995</span></p>
    </div>
    <Scroll/>
    </div>
  )
}

export default NotFound
