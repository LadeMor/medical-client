import React from "react";
import {useState, useEffect} from "react";
import Moment from 'react-moment';
import {Button, Table, Nav} from "react-bootstrap";
import "./Main.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import DeleteIcon from "./../../Icons/x-close-delete.svg";
import EditIcon from "./../../Icons/edit-write-alt.svg";

function Main(){

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                'https://localhost:5001/api/Patient',
            );
            const json = await res.json();
            setData(json);
        };
        fetchData();
    });


    return(
        <div className="main_body">
            <div className="table_block">
                <Nav.Link href="/addpatient" className="nav_button">
                    <Button variant="outline-dark">Add patient +</Button>
                </Nav.Link>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Arrival Date</th>
                        <th>Diagnose</th>
                        <th>Course</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(item => (
                        <tr key={item.ObjectID}>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                            <td>
                                <Moment format="YYYY-MM-DD">
                                    {item.arrivaldate}
                                </Moment>
                            </td>
                            <td>{item.diagnosis}</td>
                            <td>{item.courses}</td>
                            <td>
                                <Button variant="danger" value={item.id}>
                                    <img src={DeleteIcon}/>
                                </Button>
                                <Button variant="light" value={item.id}>
                                    <img src={EditIcon}/>
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Main;