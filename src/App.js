/* eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Navbar , Nav} from 'react-bootstrap';
import Home from "./components/Home";
import UserssList from "./components/UsersList";
import UserUpdate from "./components/UserUpdate";
import UserCreate from "./components/UserCreate";
import DataBaseServices from "./services/DataBaseServices";
//import DataBaseServices from "./services/DataBaseServices";


function App() {
  return (
    <div className="App">
  
  <Router>
  <Navbar bg="light" expand="lg">
  <div className="container">
  <Navbar.Brand>Employee Panel</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/add" className="nav-link">Add Employee</Link>
      <Link to="/employees" className="nav-link">Employee List</Link>
    
      
    </Nav>
    
  </Navbar.Collapse>
  </div>
</Navbar>
  
    <Route path="/employees">
    <UserssList />
    </Route>
    <Route path="/update/:id" 
    render={props => (
        <UserUpdate {...props} />
    )}>
  
    </Route>
    
    <Route path="/add">
    <UserCreate />
    </Route>
    <Route path="/" exact>
    <Home />
    </Route>
  </Router>   
    </div>
  );
}

export default App;
