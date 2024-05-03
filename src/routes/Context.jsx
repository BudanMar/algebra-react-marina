import { ContextExample1, ContextExample2, ContextExample3, ContextExample4 } from "../components/ContextExample.jsx";
import Header from "../components/Header.jsx";
import { Komponenta1 } from "../components/PropDrilling.jsx";
import { FancyTitle } from "../components/Titles.jsx";
import { NameContextProvider } from "../context/useNameContextValue.jsx";

export function Context() {
  return(
    <div>
      <Header />
      <FancyTitle title="Context Page" />
      <Komponenta1 />
      <NameContextProvider value="Peter">
      <ContextExample1/>
      <br/>
      <ContextExample2/>
      </NameContextProvider>
       <br/>
       <NameContextProvider value="Jane">
        <ContextExample3/>
        <br/>
        <ContextExample4/>
       </NameContextProvider>
      
      
    </div>);
}
