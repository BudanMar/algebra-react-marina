import Header from "../components/Header.jsx";
import { FancyTitle } from "../components/Titles.jsx";
import { FunctionalNameForm } from "../components/forme/FunctionalNameForm.jsx";

export function Forme() {
  return (
    <div>
      <Header />
      <FancyTitle title="Forme" />
      <FunctionalNameForm/>
    </div>
  );
}
