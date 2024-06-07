import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (userName.trim()) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter your name");
    }
  };

  const handleLogout = () => {
    setUserName("");
    setIsLoggedIn(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <input
            className="input"
            type="text"
            value={userName}
            placeholder="Enter your name"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      ) : (
        <div>
          <h1 className="title">Welcome {userName}</h1>
          <button className="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
