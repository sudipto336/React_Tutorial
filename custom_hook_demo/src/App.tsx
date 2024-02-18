import "./App.css";
import WithCustomHook from "./components/WithCustomHook";
import WithoutCustomHook from "./components/WithoutCustomHook";

function App() {
  return (
    <>
      <div className="flexStyle">
        <div className="withOutCustomHook">
          <WithoutCustomHook />
        </div>
        <div className="withCustomHook">
          <WithCustomHook />
        </div>
      </div>
    </>
  );
}

export default App;
