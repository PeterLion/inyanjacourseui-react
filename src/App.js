import React from 'react';
import logo from './logo.svg';
import { Provider } from "react-redux"
import './App.css';
import store from "./store"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from "./components/user/Register"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/register" component={Register} />
      </Router>
    </Provider>
  );
}

export default App;
