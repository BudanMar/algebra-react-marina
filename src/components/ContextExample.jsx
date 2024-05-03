import { useNameContextValue } from "../context/useNameContextValue.jsx";

export function ContextExample4() {
  const nameContextValue = useNameContextValue();
  return <p> Hello from the context example, context value:{nameContextValue}</p>;
}
export function ContextExample3() {
  return (<div>
    Component3:
    <ContextExample4 />
  </div>);
}
export function ContextExample2() {
  return (<div>
    Component2:
    <ContextExample3 />
  </div>);
}
export function ContextExample1() {
  return (<div>
    Component1:
    <ContextExample2 />
  </div>);
}
