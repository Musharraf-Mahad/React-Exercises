import { useState } from "react"

const App = () => {

  const [isToggle, setToggle] = useState("OFF");
  const toggleButton = () => {
    setToggle(isToggle === "OFF" ? "ON" : "OFF");
  }

  return(
    <>
    <p>The button is {isToggle}</p>
    <button onClick={toggleButton}>Turn {isToggle === "OFF" ? "ON" : "OFF"}</button>
    </>
  )
}

   export default App;