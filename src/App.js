import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Navbar , Nav} from 'react-bootstrap';
import Home from "./components/Home";
import StudentsList from "./components/StudentsList";
import StudentUpdate from "./components/StudentUpdate";
import StudentCreate from "./components/StudentCreate";

function App() {
  return (
    <div className="App">
  
  <Router>
  <Navbar bg="light" expand="lg">
  <div className="container">
  <Navbar.Brand>Students Panel</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/add" className="nav-link">Add Student</Link>
      <Link to="/students" className="nav-link">Students List</Link>
    
      
    </Nav>
    
  </Navbar.Collapse>
  </div>
</Navbar>
  
    <Route path="/Students">
    <StudentsList />
    </Route>
    <Route path="/update/:id" 
    render={props => (
        <StudentUpdate {...props} />
    )}>
  
    </Route>
    
    <Route path="/add">
    <StudentCreate />
    </Route>
    <Route path="/" exact>
    <Home />
    </Route>
  </Router>   
    </div>
  );
}

export default App;
