import React, { useState } from 'react';
import './Login.css';
const Login = () => {
  const [admin, setAdmin] = useState({
    username: '',
    password: '',
  });

  const handleInputs = (event) => {
    setAdmin({ ...admin, [event.target.name]: event.target.value });
  };

  const dataPost = async (event) => {
    console.log(admin);
    event.preventDefault();
  };
  return (
    <div className="login__container">
      <form className="login__card" onSubmit={dataPost}>
        <h1>Admin Contact info</h1>
        <div className="input__field">
          <label htmlFor="username">Your UserName</label>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={admin.username}
            onChange={handleInputs}
            required
          />
        </div>
        <div className="input__field">
          <label htmlFor="password">Correct Password</label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={admin.password}
            onChange={handleInputs}
            required
          />
        </div>
        <button onClick={dataPost}>Check</button>
      </form>
    </div>
  );
};

export default Login;
