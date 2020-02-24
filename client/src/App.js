import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import ProtectedRoute from "./utilities/ProtectedRoute"
import BubblePage from "./components/BubblePage"

const App = () => {
 

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          {/* 
            Build a PrivateRoute component that will 
            display BubblePage when you're authenticated 
          */}

          <ProtectedRoute exact path='/BubblePage' component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
