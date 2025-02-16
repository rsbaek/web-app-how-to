import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const testApi = async () => {
    const url = "http://localhost:8081/api/user/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username , password: password }) 
      })
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    testApi();
  };

  return (
    <div>
      <form className={styles.container}>
        <div className={styles.header}>
          <h3>Login</h3>
        </div>
        <div>
          <h4>Username:</h4>
          <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username here"
          ></input>
        </div>
        <div>
          <h4>Password:</h4>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password here"
          ></input>
        </div>
        <div>
          <button
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Login</button>
          <button
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
