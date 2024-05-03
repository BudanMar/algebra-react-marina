import Header from "../components/Header.jsx";
import { Komponenta1 } from "../components/PropDrilling.jsx";
import { FancyTitle } from "../components/Titles.jsx";
export function Context() {
  return(
    <div>
      <Header />
      <FancyTitle title="Context Page" />
      <Komponenta1 />
    </div>);
}
