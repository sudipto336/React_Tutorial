import "./App.css";
import Component1 from "./components/Component1";
import { UserContext } from "./context/UserContext";
import { UserDetail } from "./Objects/UserObjects";

function App() {
  const users: UserDetail[] = [
    {
      id: 1,
      name: "Sam",
    },
    {
      id: 2,
      name: "Peter",
    },
  ];

  return (
    <>
      <UserContext.Provider value={users}>
        <Component1 />
      </UserContext.Provider>
    </>
  );
}

export default App;
