import { useContext, useEffect, useState } from "react";
import { instance } from "../axios";
import { toast } from "react-toastify";
import { UserContext } from "../state";

export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const { setAuth, auth } = useContext(UserContext);

  const formlogin = (e) => {
    e.preventDefault();
    instance
      .post("auth/login", {
        username: user.username,
        password: user.password,  
      })
      .then((res) => setAuth({ name: "", token: res.data.token }))
      .catch((err) => toast.error("wrong credentials"));
  };

  return (
    <>
      <h1>login</h1>
      <form onSubmit={(e) => formlogin(e)}>
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
        <input
          type="text"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <button>login</button>
      </form>
    </>
  );
}
