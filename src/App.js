import './App.css';
import MainList from './MainList';
import ResultBoard from './ResultBoard';
import SelectedList from './SelectedList';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Page from 'react-page-loading'

function App() {
  return (
    <div className="App">
      <Router>
      <Page loader={'bubble-spin'} size={10} color={'#90e0ef'} duration={1}>
        <Switch>
          <Route path="/results" component={ResultBoard}/>
     
          <Route path="/" exact>
              <div className="row">
                <SelectedList/>
                <MainList/>
              </div>
          </Route>
        </Switch>
        </Page>
      </Router>

    </div>
  );
}

export default App;
