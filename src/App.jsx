import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import './App.css';
import Home from './components/Home';
import Employees from './components/Employees';
import Houses from './components/Houses';
import Payments from './components/Payments';
import EditContainer from './components/Forms/EditContainer';
import SelectEmployee from './components/Forms/AddItemForms/SelectEmployee';
import SelectHouse from './components/Forms/AddItemForms/SelectHouse';
import AddPayment from './components/Forms/AddItemForms/AddPayment';
import AddHouse from "./components/Forms/AddItemForms/AddHouse";
import AddEmployee from "./components/Forms/AddItemForms/AddEmployee";

function App() {
  return (
    <Router>
      <div className="App">
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/employees" className="nav-item nav-link">Employees</Link>
            <Link to="/houses" className="nav-item nav-link">Houses</Link>
            <Link to="/payments" className="nav-item nav-link">Payments</Link>
          </div>
        </nav>
      </div>
      <div className="container-fluid jumbotron">

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/employees">
            <Employees />
          </Route>
          <Route exact path="/houses">
            <Houses />
          </Route>
          <Route exact path="/payments">
            <Payments />
          </Route>
          <Route exact path="/editItem">
            <EditContainer />
          </Route>
          <Route exact path="/selectEmployee">
            <SelectEmployee />
          </Route>
          <Route exact path="/selectHouse">
            <SelectHouse />
          </Route>
          <Route exact path="/addPayment">
            <AddPayment />
          </Route>
          <Route exact path="/addHouse">
            <AddHouse />
          </Route>
          <Route exact path="/addEmployee">
            <AddEmployee />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;