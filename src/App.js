// import logo from './logo.svg';
import './App.css';
import { Route , Switch } from 'react-router-dom';
import Navbar from './Components/T/Navbar';
import Home from './Components/T/Home';
import About from './Components/T/About';
import Contact from './Components/T/Contact';
import Login from './Components/T/Login';
import SignUp from './Components/T/SignUp';
import ErrorPage from './Components/T/ErrorPage';

function App() {
  return (
    <>
    <Navbar/>
   <Switch>
    <Route exact path='/'><Home/></Route>
     <Route path='/About'><About/></Route>
    <Route path='/Contact'><Contact/></Route>
    <Route path='/Login'><Login/></Route>
    <Route path='/SignUp'><SignUp/></Route>
    <Route exact path=""><ErrorPage/></Route>
    </Switch>
    </>
  );
}

export default App;
