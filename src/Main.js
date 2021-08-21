import React from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Soal1 from './pages/Soal1';
import Soal2 from './pages/Soal2';

const Main = () => {
  
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Home' component={Home}></Route>
      <Route exact path='/Soal1' component={Soal1}></Route>
      <Route exact path='/Soal2' component={Soal2}></Route>
    </Switch>
  );
}

export default Main;