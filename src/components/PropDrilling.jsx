import { useState } from "react";

function Komponenta4({ naslov = "default" }) {
  return <p>
    Pozdrav iz Komponente 4 {naslov}
  </p>;
}
function Komponenta3({ naslov }) {
  return <Komponenta4 naslov={naslov} />;
}
function Komponenta2({ naslov }) {
  return <Komponenta3 naslov={naslov} />;
}
export function Komponenta1({ naslov }) {
  const [name, setName] = useState("djedo");
  return <div>
    <input type="text" value={name} onChange={(event) => { setName(event.target.vaue); }} />
    <Komponenta2 naslov={name} />
  </div>;
}
