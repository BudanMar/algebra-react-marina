import { useState } from "react";
import { ContextExample1, ContextExample2, ContextExample3, ContextExample4 } from "../components/ContextExample.jsx";
import Header from "../components/Header.jsx";
import { Komponenta1 } from "../components/PropDrilling.jsx";
import { FancyTitle } from "../components/Titles.jsx";
import { NameContextProvider } from "../context/useNameContextValue.jsx";

export function ContextWithState(){
  const [name, setName]=useState("perica");
  return (
    <div>
      <input type="text"
      value={name}
      onChange={(event) => {setName(event.target.value);
      }}
      />
      <NameContextProvider value={name}>
      <ContextExample1/>
      <br/>
      <ContextExample2/>
      <br/>
      <ContextExample3/>
      <br/>
      <ContextExample4/>
      </NameContextProvider>
      
    </div>);
}

export function Context() {
  return(
    <div>
      <Header />
      <FancyTitle title="Context Page" />
      <Komponenta1 />
      <ContextWithState/>
      
      
    </div>);
}
