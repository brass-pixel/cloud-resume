import { useState } from "react";
import boLogo from "./assets/logo.png";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar> </Navbar>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={boLogo} className="logo" alt="Bo Logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
