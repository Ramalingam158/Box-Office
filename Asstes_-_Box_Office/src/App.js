import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Starred from './Pages/Starred';

function App() {
  return (
    <div>
      <Switch>
        <Route exact="true" path="/">
          <Home />
        </Route>

        <Route exact="true" path="/starred">
          <Starred />
        </Route>

        <Route>
          <h1>Error 404!!!!</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
