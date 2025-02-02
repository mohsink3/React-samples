import { useState } from "react";

const NameInput=()=>{
    const[name,setName] = useState("Your name");

    return(
        <div>
            <input 
                type="text"
                value={name}
                onChange={(event)=>{
                    console.log("value enterd in textbox=>"+event?.target.value);
                    setName(event.target.value);
                    console.log(event)
                }}
                placeholder = "enter your name"
                />
                <p>your name:{name}</p>
        </div>
    )
}
export default NameInput;