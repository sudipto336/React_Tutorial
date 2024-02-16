import { createContext } from "react";
import { UserDetail } from "../Objects/UserObjects";

const UserContext = createContext<UserDetail[]>([]);

export { UserContext };
