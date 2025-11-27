import { useEffect, useState } from "react";


const Effect = () => {

    const [info,setInfo] = useState([
      { quote: "...", author: "..." },
    
       
    ])

    useEffect (()=>{
        fetch('https://dummyjson.com/quotes')
        .then(response => response.json())
        .then(data => setInfo(data.quotes))
        .catch(error => console.error(error))
    },[])
    
    return (
        <>
        <h2>
            {info.map((e,i)=>(
                <p key={i}>
                    {e.quote} <br />
                    {e.author}
                </p>
            ))}
        </h2>
        </>
    )
}
export default Effect;
