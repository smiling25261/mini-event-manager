import { useState } from "react";
import Login from "../Login";
import Dashboard from "../pages/Dashboard.jsx";
import { EventProvider } from "./context/EventContext";
import "./styles/App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );

  return (
    <EventProvider>
      {isLoggedIn ? (
        <Dashboard setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </EventProvider>
  );
}

export default App;