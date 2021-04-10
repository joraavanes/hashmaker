import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Hash from './components/Hash'
import Pbkdf2 from './components/Pbkdf2'
import Encrypt from './components/Encrypt'
import Decrypt from './components/Decrypt'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to hashmaker</h1>
      </header>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/hash" component={Hash} exact/>
          <Route path="/pbkdf2" component={Pbkdf2} exact/>
          <Route path="/encrypt" component={Encrypt} exact/>
          <Route path="/decrypt" component={Decrypt} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
