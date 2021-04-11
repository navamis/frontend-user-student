import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import AddLogin from "./AddLogin";
import AddPayment from "./AddPayment";
import ViewCollege from "./ViewCollege";
import ViewCourse from "./ViewCourse";
import ViewBranch from "./ViewBranch";
import ViewProgram from "./ViewProgram";
import ViewProgramScheduled from "./ViewProgramScheduled";
import ViewUniversity from "./ViewUniversity";
import AddApplication from "./AddApplication";
import UpdateApplication from "./UpdateApplication";
import DeleteApplication from "./DeleteApplication";
import Login from "./Login"

export default function Homepage() {
  return (
    <nav className=" navbar fixed-top">
      <Router>
        <>
          <Navbar collapseOnSelect expand="xs" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Online Admission System</Navbar.Brand>
            <ul className="navbar-nav float-right">
              {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
              <Navbar.Collapse
                id="responsive-navbar-nav"
                variant="dark"
              ></Navbar.Collapse>
            </ul>
           

            <NavDropdown title="LoginDetails" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
              
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addlogin" variant="dark">
                    Add Login
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3" className="bg-secondary">
                  <NavLink className="nav-link" to="/login" variant="dark">
                    Logout
                  </NavLink>
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>

            

            <NavDropdown title="University" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/viewuniversity"
                  >
                    View University
                  </NavLink>
                </NavDropdown.Item>
                
              </Nav>
            </NavDropdown>

            <NavDropdown title="College" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/viewcollege"
                  >
                    View College
                  </NavLink>
                </NavDropdown.Item>
               
              </Nav>
            </NavDropdown>

            <NavDropdown title="Branch" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/branches"
                  >
                    View Branch
                  </NavLink>
                </NavDropdown.Item>
               
              </Nav>
            </NavDropdown>

            <NavDropdown title="Course" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/viewcourse"
                  >
                    View Course
                  </NavLink>
                </NavDropdown.Item>
               
              </Nav>
            </NavDropdown>

            <NavDropdown title="Program" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/programs"
                  >
                    View Program
                  </NavLink>
                </NavDropdown.Item>
               
              </Nav>
            </NavDropdown>

            <NavDropdown title="Program Schedule" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/programScheduled"
                  >
                    View ProgramSchedule
                  </NavLink>
                </NavDropdown.Item>
               
              </Nav>
            </NavDropdown>

        <NavDropdown title="Application" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <ul>
               
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link active" to="/addapplication" variant="dark">
                    Add Application
                  </NavLink>
                </NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3" className="bg-secondary">
                  <NavLink className="nav-link active" to="/deleteapplication" variant="dark">
                    Delete Application
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="bg-secondary">
                  <NavLink className="nav-link active" to="/updateapplication" variant="dark">
                    Update Application
                  </NavLink>
                </NavDropdown.Item>
                </ul>
              </Nav>
            </NavDropdown>

             <NavDropdown title="Payment" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/addpayment"
                  >
                    Add Payment
                  </NavLink>
                </NavDropdown.Item>
               
              </Nav>
            </NavDropdown>


            
          </Navbar>
        </>

        <Switch>        
          <Route exact path="/addlogin">
            <AddLogin />
          </Route>
          
          <Route path="/login">
            <Login />
          </Route>

           <Route path="/addpayment">
            <AddPayment />
          </Route>

          

          
          <Route path="/viewcollege">
            <ViewCollege />
          </Route>

          <Route exact path="/viewcourse">
            <ViewCourse />
          </Route>
         

          <Route exact path="/branches">
            <ViewBranch />
          </Route>
         

          <Route exact path="/programs">
            <ViewProgram />
          </Route>
          

          <Route exact path="/viewuniversity">
            <ViewUniversity />
          </Route>
        

          <Route exact path="/programScheduled">
            <ViewProgramScheduled />
          </Route>
          

        
         <Route path="/addapplication" component={AddApplication} />
        <Route path="/updateapplication" component={UpdateApplication} />
        <Route path="/deleteapplication" component={DeleteApplication} />

        </Switch>
      </Router>
      </nav>
  );
}
