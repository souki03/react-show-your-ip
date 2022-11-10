import logo from '../logo.svg';
import '../App.css';
import Ip from '../componoment/Ip.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Show Your IP Whith A ReactJs Project.
        </p>
        
        <Ip>
        </Ip>

        <a
          className="App-link"
          href="https://reactjs.org"
        >
          Show The Code
        </a>
      </header>
    </div>
  );
}

export default App;
