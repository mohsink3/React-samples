import { useState } from "react";

const Toggle = () => {
    const [isOn, setISOn] = useState<boolean>(false);

    return (
        <div>

            <h2>{isOn ? <img src="src\assets\bulb off.jpg" /> : <img src="src\assets\bulb on.jpg" />}</h2>
            <button onClick={() => setISOn(!isOn)}>Toggle</button>
        </div>
    );
};
export default Toggle;