import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
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
          <Route path="/employees">
            <Employees />
          </Route>
          <Route path="/houses">
            <Houses />
          </Route>
          <Route path="/payments">
            <Payments />
          </Route>
          <Route path="/editItem">
            <EditContainer />
          </Route>
          <Route path="/selectEmployee">
            <SelectEmployee />
          </Route>
          <Route path="/selectHouse">
            <SelectHouse />
          </Route>
          <Route path="/addPayment">
            <AddPayment />
          </Route>
          <Route path="/addHouse">
            <AddHouse />
          </Route>
          <Route path="/addEmployee">
            <AddEmployee />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;