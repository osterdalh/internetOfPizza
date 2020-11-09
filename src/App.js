import './App.css';

import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import OverView from './pages/Overview/Overview'
import Process from './pages/Process'


function App() {
  return (
    <Router>
      <Sidebar></Sidebar>
      <Switch>
        <div className="pageContent">


          <Route exact path="/">
            <OverView />
          </Route>
          <Route path="/process">
            <Process />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
