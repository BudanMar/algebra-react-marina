import Header from "../components/Header.jsx";
import { Komponenta1 } from "../components/PropDrilling.jsx";
import { FancyTitle } from "../components/Titles.jsx";

function ContextExample4 (){
  return <p> Hello from the context example, context value:</p>
}
function ContextExample3 (){
  return <ContextExample4/>
}
function ContextExample2 (){
  return <ContextExample3/>
}

function ContextExample1 (){
  return <ContextExample2/>
}




export function Context() {
  return(
    <div>
      <Header />
      <FancyTitle title="Context Page" />
      <Komponenta1 />
      <ContextExample1/>
    </div>);
}
