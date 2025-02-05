import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log("count updated");
    })
    return (
        <div>
            <h2> use state demo</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h4>counter:{count}</h4>
        </div>
    )
}
export default Counter;
