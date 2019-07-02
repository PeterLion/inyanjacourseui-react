import React from 'react';
import logo from './logo.svg';
import { Provider } from "react-redux"
import './App.css';
import store from "./store"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from "./components/user/Register"
import Login from "./components/user/Login"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Router>
    </Provider>
  );
}

export default App;
