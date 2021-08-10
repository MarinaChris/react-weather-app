import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Athens"/>
      <footer>
        This project was coded by <a href="https://github.com/" target="_blank" rel="nonreferrer">Marina Chris</a> and is open-sourced on <a href="https://github.com/MarinaChris/react-weather-app" target="_blank" rel="nonreferrer">
        Github
        </a>
      </footer>
      </div>
    </div>
  );
}

export default App;
