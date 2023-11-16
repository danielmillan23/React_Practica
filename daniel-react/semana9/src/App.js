import logo from './logo.svg';
import './App.css';
import Home from "./components/home/home";
import List from "./components/list/list";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
