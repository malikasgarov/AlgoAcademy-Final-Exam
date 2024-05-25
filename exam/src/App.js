import './App.css';
import Header from './components/Header';
import Beginn from './components/Begin.js';
import Whyqubly from "./components/Whyqubly.js";
import Teams from "./components/Teams.js";

function App() {
  return (
    <div className="app">
      <Header />
      <div class="background"></div>
      <Beginn />
      <Whyqubly />
      <Teams />
    </div>
  );
}

export default App;
