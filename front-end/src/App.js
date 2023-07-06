import { useRoutes } from "react-router";
import "./App.css";
import { defaultProtect } from "./utils/Routes";

function App() {
  // const routing = useRoutes(protects);
  const defaultRouting = useRoutes(defaultProtect);
  return <>{defaultRouting}</>;
}

export default App;
