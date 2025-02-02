import { useState } from "react";

const NameInput = ()=>{
    const[name,setName] = useState("Your name");
    return(
        <div>
            <input
                type="text"
                value={name}
                onChange={(event)=>
                    console.log("value enterd in text box"+event.target.value);
                    setName(event.target.value);
                    console.log(event);
                }
                }
                placeholder="Enter ur name"
                />
                <p>ur nmae{name</p>
                    
        </div>
    )
}