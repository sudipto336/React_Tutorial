import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { UserDetail } from "../Objects/UserObjects";

function Component2() {
  const users = useContext<UserDetail[]>(UserContext);
  return (
    <div>
      {users.map((user) => {
        return (
          <>
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
            <br />
          </>
        );
      })}
    </div>
  );
}

export default Component2;
