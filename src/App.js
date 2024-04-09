import CustomRoutes from "./routes/CustomRoutes";
import "./App.css";
import { Link } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <CustomRoutes />
    </div>
  );
}

export default App;
