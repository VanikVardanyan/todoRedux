import React from 'react';
import Registration from './components/LoginPage/Registration/Registration';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LogIn from './components/LoginPage/Login/Login';
import HomePage from './components/Home/Home';

const App = () => {
  
  return (
        <div >
    <BrowserRouter>
      <Switch>
      <Route exact path='/' component = {HomePage} /> 
      <Route path='/registration' component={Registration}/>  
      <Route path='/login' component={LogIn} /> 
      </Switch>
      </BrowserRouter>
     </div>
  );
}

export default App;
