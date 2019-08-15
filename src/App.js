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
import Courses from './components/course/Courses';
import Programs from './components/program/Programs';
import Main from './components/public/Main';
import Nav from './components/public/Nav';
import Blog from './components/blog/Blog';
import "./assets/css/styles.css"
import "./assets/css/user_styles.css"
import QuizForm from './components/quiz/QuizForm';
import ViewCourse from './components/course/ViewCourse';
import ProgramCourses from './components/program/ProgramCourses';

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
        <Header />
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/public" component={Main} />
          <Route exact path="/course/:course_id" component={ViewCourse} />
          <Route exact path="/:id/:name" component={ProgramCourses} />
          <Switch>
            <SecuredRoute exact path="/dashboard" component={Dashboard} />
            <SecuredRoute exact path="/program" component={CreateProgram} />
            <SecuredRoute exact path="/programs" component={Programs} />
            <SecuredRoute exact path="/program/:id" component={Program} />
            <SecuredRoute exact path="/updateProgram/:id" component={UpdateProgram} />
            <SecuredRoute exact path="/topics" component={Topics} />
            <SecuredRoute exact path="/topics/:id" component={Topic} />
            <SecuredRoute exact path="/program/:id/addTopic" component={AddTopic} />
            <SecuredRoute exact path="/topics/:id/addCourse" component={AddCourse} />
            <SecuredRoute exact path="/courses" component={Courses} />
            <SecuredRoute exact path="/addQuiz" component={QuizForm} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
