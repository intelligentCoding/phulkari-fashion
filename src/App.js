import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
const PhulkariPants = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
      <Route  exact path='/' component={HomePage}></Route>
      <Route  path='/phulkari-pants' component={PhulkariPants}></Route>
      </Switch>
    </div>
    // <div>
    //   <HomePage></HomePage>
    // </div>
  );
}

export default App;
