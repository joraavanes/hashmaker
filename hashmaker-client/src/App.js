import { Switch, BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Home from './components/Home'
import Hash from './components/Hash'
import Pbkdf2 from './components/Pbkdf2'
import Encrypt from './components/Encrypt'
import Decrypt from './components/Decrypt'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import BorderClearIcon from '@material-ui/icons/BorderClear';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import { makeStyles } from '@material-ui/core';
import AppBar from './components/UI/ElevateAppBar'

const useStyles = makeStyles(theme => ({
  alignCenter: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Container className="App">
      <Router>
        <AppBar/>
        <ButtonGroup className={classes.alignCenter}>
                <Button 
                  type="button" 
                  color="secondary" 
                  variant="outlined"
                  component={NavLink}
                  to={'/'}
                    >
                    Home
                  </Button>
                <Button 
                    type="button" 
                    color="secondary" 
                    variant="outlined"
                    startIcon={<BorderClearIcon fontSize="small" color="secondary"/>}
                    component={NavLink}
                    to={'/hash'}
                    >
                    Hash
                </Button>
                <Button 
                    type="button" 
                    color="secondary" 
                    variant="outlined"
                    startIcon={<TrackChangesIcon fontSize="small" color="secondary"/>}
                    component={NavLink}
                    to={'/pbkdf2'}>
                    PBKDF2
                </Button>
                <Button 
                    type="button" 
                    color="secondary" 
                    variant="outlined"
                    startIcon={<LockIcon fontSize="small" color="secondary"/>}
                    component={NavLink}
                    to={'/encrypt'}>
                        Encrypt
                </Button>
                <Button 
                    type="button" 
                    color="secondary" 
                    variant="outlined"
                    startIcon={<LockOpenIcon fontSize="small" color="secondary"/>}
                    component={NavLink}
                    to={'/decrypt'}>
                        Decrypt
                </Button>

            </ButtonGroup>
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
