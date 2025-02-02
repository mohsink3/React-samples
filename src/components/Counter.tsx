import { useState } from "react";

const Counter = ()=>{
    const[count,setcount] = useState(0);

    return(
        <div>
            <h2>count:{count}</h2>
            <button onClick={()=>setcount(count+1)}>Increment</button>

        </div>


    )
}

export default Counter;