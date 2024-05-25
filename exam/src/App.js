import './App.css';
import Header from './components/Header';
import Beginn from './components/Begin.js';
import Whyqubly from "./components/Whyqubly.js";
import Teams from "./components/Teams.js";
import Enginering from './components/Enginering.js';
import About from './components/About.js';
import Sign from './components/Sign.js';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="background"></div>
      <Beginn />
      <Whyqubly />
      <Teams />
      <Enginering />
      <About />
      <Sign />
    </div>
  );
}

export default App;
