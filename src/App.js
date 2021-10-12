// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/T/Navbar';
import Home from './Components/T/Home';
import About from './Components/T/About';
import Contact from './Components/T/Contact';
import Login from './Components/T/Login';
import SignUp from './Components/T/SignUp';
import ErrorPage from './Components/T/ErrorPage';

import Homepage from './Components/SignUpsignIn/Homepage';
import Login2 from './Components/SignUpsignIn/Login2';
import Signin2 from './Components/SignUpsignIn/Signin2';
import { useState } from 'react';

function App() {
  const [Loginuser, setLoginuser] = useState({})
  return (
    <>
      <Navbar />
      <Switch>
        {/* <Route exact path='/no'><Home /></Route>
        <Route path='/About'><About /></Route>
        <Route path='/Contact'><Contact /></Route>
        <Route path='/Login'><Login /></Route>
        <Route path='/SignUp'><SignUp /></Route>
        <Route exact path=""><ErrorPage /></Route> */}

        <Route exact path='/'>
          {
            
            Loginuser && Loginuser._id ? <Homepage setLoginuser={Loginuser,setLoginuser} /> : <Login2 setLoginuser={setLoginuser} />
          }
        </Route>
        <Route path='/login2'><Login2 setLoginuser={setLoginuser} /></Route>
        <Route path='/signin2'><Signin2 /></Route>
      </Switch>
    </>
  );
}

export default App;
