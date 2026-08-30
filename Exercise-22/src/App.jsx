import React, { useState } from 'react'

const App = () => {

  const [formData, setFormData] = useState(
    {username: "",
      password: "",
      email: "",
    });

    const [isChecked, setIsChecked] = useState(false);

    const [selectedOption, setSelectedOption] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    console.log(isChecked)
    console.log(selectedOption)
  }

  const handleChange = (e) => {
    const {name, value} =  e.target;
    setFormData((prevData) => ({...prevData, [name]:value}));
  }

  const handleTerms = (e) => {
    setIsChecked(e.target.checked);
  } 

  const handleSelectedOption = (e) => {
    setSelectedOption(e.target.value)
  }

  return (
   <form onSubmit={handleSubmit}>
    <fieldset>
      <legend>Sample Form</legend>
    <label htmlFor="">Username</label> <br />
    <input type="text" 
    name="username"
    value={formData.username} 
    onChange={handleChange}
    /> <br />
    <label htmlFor="">Email</label> <br />
    <input type="text" 
    name="email"
    value={formData.email}
    onChange={handleChange}
    /> <br />
    <label htmlFor="">Password</label> <br />
    <input type="password" 
    name="password"
     value={formData.password}
     onChange={handleChange}
     /> <br />

    <label htmlFor="">Agree Terms: </label> 
    <input type="checkbox"
    checked={isChecked}
    onChange={handleTerms}
    />  <br />

    <select value={selectedOption}
      onChange={handleSelectedOption}>
      <option value="">Choose P-language you know</option>
      <option value="java">java</option>
      <option value="python">python</option>
      <option value="ruby">Ruby</option>
      <option value="go">Go</option>
    </select> <br />

    <button>submit</button>
    </fieldset>
   </form>
  )
}

export default App