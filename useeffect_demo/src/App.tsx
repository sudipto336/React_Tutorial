import "./App.css";
import BlankDependency from "./components/BlankDependency";
import WithDependency from "./components/WithDependency";
import WithoutDependency from "./components/WithoutDependency";

function App() {
  return (
    <>
      <WithoutDependency />
      <br />
      <BlankDependency />
      <br />
      <WithDependency />
    </>
  );
}

export default App;
