import { use, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>

        <button onClick={toggleTheme} style={{ marginBottom: "1rem" }}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      <h1>Welcome to My App</h1>
      <p>This is the home page.</p>
      {user ? (
        <>
          <p>Hello, {user}!</p>
          <Link to="/dashboard">
            <button style={{ marginRight: "1rem" }}>Go to Dashboard</button>
          </Link>

          <Link to="/contacts">
            <button style={{ marginRight: "1rem" }}>View Contacts</button>
          </Link>

          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please log in to access protected routes.</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Home;
