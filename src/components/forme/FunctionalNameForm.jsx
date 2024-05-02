import { useState } from "react";
export function FunctionalNameForm() {
  const [name, setName]= useState ("pero");
  const onInputChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return <form>
    <label htmlFor="name">Ime</label>
    <input 
      name="name" 
      type="text" 
      onChange={onInputChangeHandler}
     />
    <button type="submit">Pošalji</button>
    <pre>
      Trenutna vrijednost: {name}
    </pre>
  </form>;
}
