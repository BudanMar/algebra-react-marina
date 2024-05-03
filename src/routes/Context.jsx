import { createContext, useContext } from "react";
import Header from "../components/Header.jsx";
import { Komponenta1 } from "../components/PropDrilling.jsx";
import { FancyTitle } from "../components/Titles.jsx";

const NameContext=createContext("John")

function ContextExample4 (){
  const nameContextValue = useContext(NameContext)
  return <p> Hello from the context example, context value:{nameContextValue}</p>
}
function ContextExample3 (){
  return (<div>
    Component3:
    <ContextExample4/>
    </div>)
}
function ContextExample2 (){
  return (<div>
    Component2:
    <ContextExample3/>
    </div>)
}

function ContextExample1 (){
  return (<div>
    Component1:
    <ContextExample2/>
    </div>)
}




export function Context() {
  return(
    <div>
      <Header />
      <FancyTitle title="Context Page" />
      <Komponenta1 />
      <NameContext.Provider value="Peter">
      <ContextExample1/>
      <br/>
      <ContextExample2/>
      </NameContext.Provider>
       <br/>
       <NameContext.Provider value="Jane">
        <ContextExample3/>
        <br/>
        <ContextExample4/>
       </NameContext.Provider>
      
      
    </div>);
}
