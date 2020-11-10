import './App.css';

import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import OverView from './pages/Overview/Overview'
import Process from './pages/Process'
import Shaping from './pages/Shaping/Shaping'

function App() {
  return (
    <Router>
      <Sidebar></Sidebar>
      <Switch>
        <div className="pageContent">


          <Route exact path="/">
            <OverView />
          </Route>
          <Route exact path="/process">
            <Process />
          </Route>
          <Route path="/process/:id">
            id details
          </Route>
          <Route path="/shaping">
            <Shaping/>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
