import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log("count updated");
    });

    return (
        <div>
            <h2>use effect demo</h2>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <h4>counter value:{count}</h4>
        </div>
    );
}
export default Counter;