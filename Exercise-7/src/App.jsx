  import { useState, useEffect } from "react";
    
     const App = () => {

    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => setX(e.clientX);
        window.addEventListener("mousemove", handleMouseMove)
    },[])

        useEffect(() => {
        const handleMouseMove = (e) => setY(e.clientY);
        window.addEventListener("mousemove", handleMouseMove)
    },[])

    return(
        <>
        <p>Mouse x: {X} </p>
        <p>Mouse y: {Y} </p>
        </>
    )

  }

    export default App;