import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ColorList from "./components/ColorList"
import Login from "./components/Login";
import "./styles.scss";
import ProtectedRoute from "./utilities/ProtectedRoute"
import BubblePage from "./components/BubblePage"

const App = () => {
  const [savedBubble, setSavedBubble] = useState([]);

  const addToSavedBubbles = bloop => {
    setSavedBubble([...savedBubble, bloop]);
  }

  return (
    <Router>
      <div className="App">
        <ColorList list={savedBubble}/>
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}

        <ProtectedRoute exact path='/BubblePage' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
