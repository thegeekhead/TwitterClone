import React, { Component } from 'react'
import Sidenavbar from './componets/Sidenavbar'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from 'react-router-dom';
import Home from './componets/MiddleELements/Home';
import Explore from './componets/MiddleELements/Explore';
import Notification from './componets/MiddleELements/Notification';
import Messages from './componets/MiddleELements/Messages';
import Bookmark from './componets/MiddleELements/Bookmark';
import List from './componets/MiddleELements/List';
import Profile from './componets/MiddleELements/Profile';
import More from './componets/MiddleELements/More';
import Widget from './componets/Widgets/Widget';
import LogInSignUp from './componets/LogInSignUp';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <h1>Welcome to Twitter Clone 🚀</h1> */}
        {/* side navbar */}
        <Sidenavbar/>
        {/* <LogInSignUp/> */}

        {/* posts */}
        <Home/>

        {/* widgets */}
        <Widget/>

      </div>
    )
  }
}