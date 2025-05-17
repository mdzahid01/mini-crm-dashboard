import React, { useState, useContext } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

function Login() {

    const { login } = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard';
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [credentials, setCredentials] = useState({username: 'zahid', password: 'zahid@123'});
    const [errors, setErrors] = useState('');

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setCredentials((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {username, password} = credentials;
        if(!username || !password){
            setErrors('Please fill all the fields');
            return;
        }
        if(username === 'zahid' && password === 'zahid@123'){
            setLoading(true);
            setTimeout(async () => {
                await login(username);
                setLoading(false);
                navigate(from, { replace: true });
            }, 1000);
        }else{
            setErrors('Invalid credentials');
        }

    }

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Login</h2>
          {errors && <p style={{ color: "red" }}>{errors}</p>}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <input
                type="text"
                placeholder="username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                // required
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={credentials.password}
                onChange={handleChange}
                // required
              />
            </div>
            <Link to="/">go home</Link>
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Login;