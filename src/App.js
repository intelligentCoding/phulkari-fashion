import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSingup from './pages/signin-signup/signin-signup-component';
function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route  exact path='/' component={HomePage}></Route>
      <Route  path='/shop' component={ShopPage}></Route>
      <Route  path='/signin' component={SigninAndSingup}></Route>
      </Switch>
    </div>
    // <div>
    //   <HomePage></HomePage>
    // </div>
  );
}

export default App;
