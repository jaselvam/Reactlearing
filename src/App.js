import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import Fruits from './Components/Fruits';
import Indexlab3 from './Components/Indexlab3';
import Classcompo from './Components/Classcompo';
import Functionalcompo from './Components/Functionalcompo';
import ErrBoundary from './Components/ErrBoundary';
import Login from './Components/Login';
import Register from './Components/Register';
import ErrorBoundary from './Lab5/ErrorBoundary';
import Menu from './Lab5/Menu';
import Parent from './Lab6/Parent';
import ClockTick from './Lab6/ClockTick';
import FragmentDemo from './Lab7/FragmentDemo';
import HOCDemo from './Lab7/HOCDemo';
import RoutingDemo from './Lab8/RoutingDemo';

class App extends Component {
  render(){
  return (
    <div>
     
      <div className="App">
        
        <RoutingDemo/>
        {/*
        <HOCDemo/>
        <FragmentDemo/>
        <Parent/>
        <ClockTick/>
        address<textarea min='0' max='8' placeholder='enter address with pincode'></textarea><br/>
        description <textarea placeholder='enter description'></textarea>
        <hr/>
        <Fruits/>
        <hr/>
        <Indexlab3/>
        <hr/>
        <Classcompo/>
        <Functionalcompo/>
        <Login/>
        <Register/>
        <ErrorBoundary>
          <Menu dish='biryani'/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Menu dish='rooti'/>
        </ErrorBoundary>*/}
        
      </div>
    </div>
  );
      }
}

export default App;
