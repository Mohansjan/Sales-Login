import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


import Logi from './login';
import App from "./App";
import LoginSection from './login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
   
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {isLoggedIn ? <Redirect to="/app.js" /> : <LoginSection onLogin={handleLogin} />}
        </Route>
        <Route path="/">
          {isLoggedIn ? <App.js /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
