import { useState } from "react"
import { useEffect } from "react";

const App = () => {

  const [title,setTitle] = useState("Welcome!");
  const [name,setName] = useState("");
  const [greeting,setGreeting] = useState("Hello, ");

  useEffect(() => {
    document.title = title;
   
  },[title])

   useEffect(() => {
    if (name) {
      setTitle(`${greeting} ${name}`);
    } else {
      setTitle("Welcome!");
    }
  }, [name, greeting]);

  return(
    <>
    <h1>Enter your name: </h1>
    <input type="text" 
    value={name}
    onChange={(e)=> setName(e.target.value)}
    />
    <h1>Choose a Greeting: </h1>
     <input type="text" 
    value={greeting}
    onChange={(e)=> setGreeting(e.target.value)}
    />
    </>
  )

}

   export default App;