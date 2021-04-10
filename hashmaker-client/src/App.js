import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Home from './components/Home'
import Hash from './components/Hash'
import Pbkdf2 from './components/Pbkdf2'
import Encrypt from './components/Encrypt'
import Decrypt from './components/Decrypt'

function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <Typography 
          variant="h3"
          align="center"
          component="h2"
          color="primary">
          Welcome to Hashmaker
        </Typography>
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
    </Container>
  );
}

export default App;
