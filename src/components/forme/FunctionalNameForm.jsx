import { useState, useRef } from "react";
export function FunctionalNameForm() {
  const [name, setName]= useState ("pero");
  const onInputChangeHandler = (event) => {
    const value =event.target.value
    const valueWithoutNumbers = value.replace(/\d/gi,"")
    setName (valueWithoutNumbers)
  };
  return <form>
    <h3>On input change</h3>
    <label htmlFor="name">Ime</label>
    <input 
      name="name" 
      type="text"
      value={name} 
      onChange={onInputChangeHandler}
     />
    <button type="submit">Pošalji</button>
    <pre>
      Trenutna vrijednost: {name}
    </pre>
  </form>;
}

export function NameForm() {
  const[name2, setName]=useState("Pero2");
  const [numberAllowed, setNumberAllowed] =useState(false)
  const nameInputRef = useRef(null);
  const checkBoxInputRef = useRef(null);
  const onSubmitHandler = (event) => {
    event.preventDefault()
    const nameValue = nameInputRef.current.value
    const checkboxValue =checkBoxInputRef.current.checked
    const finalName = checkboxValue ? nameValue : nameValue.replace(/\d/gi,"");
    setName(finalName)
    setNumberAllowed(checkboxValue)
  
  
  };
  return <form onSubmit={onSubmitHandler}>
    <h3>On submit</h3>
    <label htmlFor="name">Ime</label>
    <input
      ref={nameInputRef} 
      name="name" 
      type="text"
    />
    <br/>
    <label htmlFor="box">Dopusti brojeve</label>
    <input
    ref ={checkBoxInputRef}
    name="box"
    type="checkbox"
    />
    <br/>
    <button type="submit">Pošalji</button>
    <pre>
      Trenutna vrijednost:{name2}
      <br/>
      Brojevi dopušteni: {(numberAllowed ? "da": "ne")}
    </pre>
  </form>;
}
