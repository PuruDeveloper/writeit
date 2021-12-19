import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/api/")
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  });
  return <div className="App">Hello brader from frontend</div>;
}

export default App;
