import React from "react";
import {
    Navbar,
    Container,
    Nav} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Route,
    Routes} from "react-router-dom";

import AddPatient from "../AddPatient/AddPatient";

import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "../Main/Main";

function NavBar(){
    return (
        <div>
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <div className="nav_bar">
                            <Navbar.Brand href="/">Medical</Navbar.Brand>
                        </div>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/addpatient" element={<AddPatient/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default NavBar;