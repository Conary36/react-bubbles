import React, {useState} from "react";
import {axiosWithAuth} from '../utilities/axiosWithAuth'

const Login = (props) => {

  const [logIn, setLogIn] = useState({username: "", password: ""})

  const handleChange = e => {
    setLogIn({...logIn, [e.target.name]: e.target.value})
  }

  // make a post request to retrieve a token from the api
  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
        .post("/api/login", logIn)
        .then(res => {
          console.log(res.data)
          localStorage.setItem("token", (res.data.payload))
          props.history.push("/BubblePage");
        })
        .catch(err => {
          localStorage.removeItem("token");
          console.log("YOU SUCK AT THIS!", err);
        })
  }
  // when you have handled the token, navigate to the BubblePage route
  return (
    <section>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={logIn.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={logIn.password}
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>

    </section>
  );
};

export default Login;
