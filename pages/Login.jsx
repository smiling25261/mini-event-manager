import { useState } from "react";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (!username.trim()) {
      alert("Enter username");
      return;
    }
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };

  return (
    <div className="login-container">
      <h2>Mini Event Manager</h2>
      <input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;