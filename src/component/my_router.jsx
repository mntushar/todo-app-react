import react  from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import HeardTitle from './heardTitle';
import Card from './card';
import Card2 from './card2';
import Navbar from './navbar';
import Logout from './logout';
import Login from './login';
import MyError from './my_error'
import '../cse_component/my_style.css';


export default function MyRouter() {
  var loggedIn = false
  
  // check user authentication
  if(sessionStorage.getItem('username')==null){
    loggedIn = false
  }
  else{
    loggedIn = true
  }

  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Card}>
          {loggedIn ? '' : <Redirect to="/login" />} 
        </ Route>
        <Route exact path="/class" component={Card2}>
          {loggedIn ? '' : <Redirect to="/login" />}
        </ Route>
        <Route exact path="/logout" component={Logout}>
          {loggedIn ? '' : <Redirect to="/login" />}
        </Route>
        <Route exact path='/login' component={Login} />
        <Route component={MyError} />
      </Switch>
    </BrowserRouter>
    
  );
}


