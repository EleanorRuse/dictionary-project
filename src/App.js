import Banner from './Banner.gif';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={Banner} className="Ele-logo" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>Coded by Eleanor Ruse</small>
        </footer>
    </div>
    </div>
  );
}

export default App;
