import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledLoginPage } from "./styles/LoginPage.styled";

function LoginPage() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const createUser = async () => {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    const users = await response.json();
    setUsers(users.data);
    setUser({});
  };

  const handleChange = (event) => {
    const newUser = { ...user };
    newUser[event.target.name] = event.target.value;
    setUser(newUser);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    createUser();
    setUser({
      userName: "",
      password: "",
    });
  };

  useEffect(() => {
    fetch("/api/users", { method: "get" })
      .then((response) => response.json())
      .then((json) => setUsers(json.data))
      .catch((error) => console.log("error retrieving users", error));
  }, []);

  return (
    <StyledLoginPage>
      <div>
        <div class="switch__circle"></div>
        <h1>Welcome Back !</h1>
        <p>Please select an existing user below to login</p>
        <div className="existingUser">
          {users.map((user) => (
            <div key={user._id}>
              <Link to={`/user/${user._id}`}>{user.userName}</Link>
            </div>
          ))}
        </div>
        <button>SIGN IN</button>
      </div>
      <div>
        <h1>Create Account</h1>
        <form onSubmit={handleSignUp}>
          <div>
            <input
              placeholder="Username"
              onChange={handleChange}
              name="userName"
              type="text"
              value={user.userName}
            />
          </div>
          <div>
            <input
              placeholder="Password"
              onChange={handleChange}
              name="password"
              type="text"
              value={user.password}
            />
          </div>
          <button>SIGN UP</button>
        </form>
      </div>
    </StyledLoginPage>
  );
}

export default LoginPage;

{
  /* <StyledLoginPage>
<h1>Log In</h1>
<h5>Please select an existing user below</h5>
<div className="existingUser">
  {users.map((user) => (
    <div key={user._id}>
      <Link to={`/user/${user._id}`}>{user.userName}</Link>
    </div>
  ))}
</div>
<div className="form">
  <h1>Sign Up</h1>
  <form onSubmit={handleSignUp}>
    <div>
      <label htmlFor="userName">Username</label>
      <input
        onChange={handleChange}
        name="userName"
        type="text"
        value={user.userName}
      />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input
        onChange={handleChange}
        name="password"
        type="text"
        value={user.password}
      />
    </div>
    <button>Sign Up</button>
  </form>
</div>
</StyledLoginPage> */
}
