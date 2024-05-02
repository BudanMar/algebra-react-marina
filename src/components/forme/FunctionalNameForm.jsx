import { useState } from "react";
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
  const[name, setName]=useState("")
  const onSubmitHandler = (event) => {
    event.preventDefault()
    const formElement = event.target
    const nameValue = formElement.name.value
    setName(nameValue)

  
  
  
  };
  return <form onSubmit={onSubmitHandler}>
    <h3>On submit</h3>
    <label htmlFor="name">Ime</label>
    <input 
      name="name" 
      type="text"
    />
    <button type="submit">Pošalji</button>
    <pre>
      Trenutna vrijednost:{name}
    </pre>
  </form>;
}
