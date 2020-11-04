import logo from './logo.svg';
import './App.css';
import IndividualSurvey from "./Components/IndividualSurvey";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <IndividualSurvey />
    </div>
  );
}

export default App;