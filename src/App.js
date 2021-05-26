import logo from './logo.svg';
import './App.css';
import Greet from './practicecomponents/Greet';
import Welcome from './practicecomponents/Welcome'
import Hello from './practicecomponents/Hello'
import Message from './practicecomponents/Message'
import Counter from './practicecomponents/Counter'
import FunctionClick from './practicecomponents/FunctionClick';
import ClassClick from './practicecomponents/ClassClick';
import EventBind from './practicecomponents/EventBind';
import ParentComponent from './practicecomponents/ParentComponent';
import ChildComponent from './practicecomponents/ChildComponent';
import UserGreeting from './practicecomponents/UserGreeting';
import List from './practicecomponents/List';
import List1 from './practicecomponents/List1';
import IndexKey from './practicecomponents/IndeyKey';
import Form from './practicecomponents/Form';
import Login from './appPages/Login';
import HomePage from './appPages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch> 
        <Route exact path = "/login" component={Login}/>
        <Route exact path = "/homepage" component={HomePage}/>
      </Switch>
    </Router>
    </div>
  );
}


export default App;
