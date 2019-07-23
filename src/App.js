import React from 'react';
import { Provider } from "react-redux"
import './App.css';
import "./assets/css/custom.css"
import store from "./store"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from "./components/user/Register"
import Login from "./components/user/Login"
import "bootstrap/dist/css/bootstrap.min.css";
import SecuredRoute from './utils/SecuredRoute';
import Dashboard from "./components/Dashboard"
import jwt_decode from "jwt-decode"
import setJwtToken from "./utils/user/setJwtToken"
import { SET_USER } from "./actions/types"
import { logout } from "./actions/userActions"
import Header from "./components/Layout/Header"
import CreateProgram from "./components/program/CreateProgram"
import UpdateProgram from './components/program/UpdateProgram';
import AddTopic from './components/program/AddTopic';
import Program from './components/program/Program';
import Landing from "./components/Layout/Landing"
import About from "./components/Layout/About"
import Footer from './components/Layout/Footer';
import Topics from './components/topic/Topics';
import Topic from './components/topic/Topic';
import AddCourse from './components/topic/AddCourse';

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJwtToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_USER,
    payload: decoded_jwtToken
  });
}

function App() {

  return (
    <Provider store={store}>

      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about-us" component={About} />
          <Switch>
            <SecuredRoute exact path="/dashboard" component={Dashboard} />
            <SecuredRoute exact path="/program" component={CreateProgram} />
            <SecuredRoute exact path="/program/:id" component={Program} />
            <SecuredRoute exact path="/updateProgram/:id" component={UpdateProgram} />
            <SecuredRoute exact path="/topics" component={Topics} />
            <SecuredRoute exact path="/topics/:id" component={Topic} />
            <SecuredRoute exact path="/program/:id/addTopic" component={AddTopic} />
            <SecuredRoute exact path="/topics/:id/addCourse" component={AddCourse} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
