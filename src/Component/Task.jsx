import { useState } from "react"
import Lion from '../assets/images/lion-animal-isolated-photo.jpg'
import Tiger from '../assets/images/Behind-the-Roar-Understanding-Behavior-of-Tigers_405386653.webp'

const Task = () => {

  // Image State
  const [picture, setPicture] = useState(false)

  // Shape State
  const [shapeIndex, setShapeIndex] = useState(0)

  // Image Change Function
  const toggleImage = () => {
    setPicture(!picture)
  }

  // Shape Change Function
  const changeShape = () => {
    setShapeIndex((shapeIndex + 1) % 3)
  }

  return (
    <>
      {/* Image Section */}
      <div style={{ display:"flex", justifyContent:"center",alignItems:"center" , gap:"20px" }}>
        {
          picture 
          ? <img src={Lion} alt="lion" width="300px" height="200px"/>
          : <img src={Tiger} alt="tiger" width="300px" height="200px"/>
        }
      </div>
      <div style={{ display:"flex", justifyContent:"center", marginTop:"10px" }}>
        <button 
          style={{
            background:"blue",
            color:"white",
            padding:"10px",
            border:"none",
            borderRadius:"5px",
            cursor:"pointer"
          }}
          onClick={toggleImage}
        >
          Switch Animal
        </button>
      </div>

      {/* Shape Section */}
      <div style={{ display:"flex", justifyContent:"center",marginTop:"25px" }}>
        {
          shapeIndex === 0 && 
          <div style={{ width:"120px", height:"120px", background:"purple", borderRadius:"5px" }}></div>
        }
        {
          shapeIndex === 1 && 
          <div style={{ width:"120px", height:"120px", background:"orange", borderRadius:"50%" }}></div>
        }
        {
          shapeIndex === 2 && 
          <div style={{ width:"250px", height:"100px", background:"cyan", borderRadius:"20px" }}></div>
        }
      </div>

      <div style={{display:"flex", justifyContent:"center", marginTop:"10px" }}>
        <button 
          style={{
            background:"green",
            color:"white",
            padding:"10px",
            border:"none",
            borderRadius:"5px",
            cursor:"pointer",
            marginBottom:"30px"
          }}
          onClick={changeShape}
        >
          Change Shape
        </button>
      </div>
    </>
  )
}

export default Task;
