import { useRoutes } from "react-router-dom";
import "./App.css";
import { defaultProtect } from "./utils/Routes";

function App() {
  const routing = useRoutes(defaultProtect);
  return <>{routing}</>;
}

export default App;
