import { useState } from "react"

export const Counter = () => {

    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        setCount(count - 1);
    }

      const handleIncrement = () => {
        setCount(count + 1);
    }

    return(
        <>
        <h2>Count: {count} </h2>
        <button onClick={handleDecrement} disabled={count==0} >Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
        </>
    )
} 
 