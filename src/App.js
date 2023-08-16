import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Login from "./login";
import { instance } from "./axios";
import Products from "./products";

function App() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    instance.get("products").then((res) => setProd(res.data));
  }, []);
  const del = (id) => {
    console.log(id);
    instance
      .delete(`products/3345`)
      .then((res) => toast.success("successfully deleted"));
  };
  return (
    <div className="App">
      <h1>dont take a video !!!</h1>
      <Products />
      <Login />

      {prod?.map((p) => {
        return (
          <div key={p.id}>
            <h2>{p.title}</h2>
            <button onClick={() => del(p.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
