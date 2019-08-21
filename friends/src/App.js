import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="login">
          <Link to="/login">Login</Link>
        </div>
        <div className="protectedPage">
          <Link to="/protected">Protected Page</Link>
        </div>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
