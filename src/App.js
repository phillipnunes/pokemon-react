import React, { useState } from "react";
import "./index.scss";

const App = () => {
  const [title, setTitle] = useState("Blank page");

  return (
    <>
      <h1 className="title">{title}</h1>
      <button onClick={() => setTitle("New title")}>set new title</button>
    </>
  );
};

export default App;
