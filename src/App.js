import logo from './logo.png';
import header from './header.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={header} className="dictionary-header" alt="header" />
      </header>
      <main>
        <Dictionary defaultKeyword="coffee" />
      </main>
      <footer className="App-footer">
         <img src={logo} className="Ele-logo" alt="logo" />
        <small>Coded by Eleanor Ruse Open Sourced on GitHub</small>
        </footer>
    </div>
    </div>
  );
}

export default App;
