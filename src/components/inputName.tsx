import { useState } from "react";

const NameInput = () => {
    const [name, setName] = useState("your name");
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(event) => {
                    console.log("value enterd in textbox" + event.target.value);
                    setName(event.target.value);
                }}
                placeholder="Enter your name"
            />
            <p>your name:{name}</p>
        </div>
    );
};
export default NameInput;