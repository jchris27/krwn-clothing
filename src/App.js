import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';

const Hats = () => {
  return <div>HATS PAGE</div>;
};
function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop/hats" component={Hats}></Route>
    </Switch>
  );
}

export default App;
