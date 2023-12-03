import "./image.scss"
import img from "../../public/reel4.jpg"

export function Image() {
  return (
        <div className="image">
            <img
    src="/toukra-project/reel1.jpg" alt="" className="w-full md:h-[600px] h-[300px]"/>
        </div>
  )
}

export function Image1() {
  return (
    <div className="image">
      <img
    src={img} alt="" className="w-full md:h-[600px] h-[300px]"/>
    </div>
  )
}

export function Image2() {
    return (
      <div className="image">
        <img
    src="/toukra-project/reel5.jpg" alt="" className="w-full md:h-[600px] h-[300px] bg-white"/>
      </div>
    )
  }

  export function Image3() {
    return (
      <div className="image">
         <img
    src="/toukra-project/bus.jpg" alt="" className="w-full md:h-[600px] h-[300px] "/>
      </div>
    )
  }
  


