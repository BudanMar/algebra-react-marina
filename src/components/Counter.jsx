import { useState } from "react";

export function Counter({ initial }) {
  const [count, setCount] = useState(initial);
  console.log("counter se rerenderao", count);

  const addOne = () => {
    // modifikacija stanja kada ovisimo o prethodnom
    // koristi se funkcija koja uzima prethodno stanje i vrača novo
    setCount((previousValue) => previousValue + 1);
    // verbosniji način zapisa istog
    // setCount(function(previousValue){
    //     return previousValue + 1
    // })
  };

  const removeOne = () => {
    setCount(previousValue => previousValue - 1);
  };

  return <div>
    <h2>Stanje brojača: {count}</h2>
    <button onClick={addOne}>
      Dodaj 1
    </button>
    <button onClick={removeOne}>
      Oduzmi 1
    </button>
  </div>;
}
