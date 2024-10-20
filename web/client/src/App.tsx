import "/src/globals.css";
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="flex flex-col">
      <Link to= "/login">Login</Link>
      <Link to = "/register">Register</Link>
    </div>
  )
}

export default App
