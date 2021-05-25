import logo from './logo.png';
import banner from './banner.gif';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
<img src={banner} className="Ele-logo" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="welcome"/>
      </main>
      <footer className="App-footer">
        <a href="https://www.linkedin.com/in/eleanor-ruse-8aa6a011b/" target="_blank" rel="noreferrer">
          <img src={logo} className="Ele-logo" alt="logo" />
        </a>
        <small>Coded by <a href="https://www.linkedin.com/in/eleanor-ruse-8aa6a011b/">Eleanor Ruse</a>{" "}and{" "}
        <a href="https://github.com/EleanorRuse/dictionary-project">
          Open-sourced on Github
        </a></small>
        </footer>
    </div>
    </div>
  );
}

export default App;
