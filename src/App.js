import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Collections from "./components/collections/Collections";

function App() {
  return (
    <Router>
      <div className="App">
        <Route>
          <Navbar />
        </Route>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/collection">
            <Collections />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
