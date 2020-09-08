import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Text Editor</h1>
      </header>
      <div className="editor">
        <TextEditor />
      </div>
    </div>
  );
}

export default App;
