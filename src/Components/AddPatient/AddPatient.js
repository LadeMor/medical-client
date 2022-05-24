import React, {useState, useEffect} from "react";
import {Form, Button} from "react-bootstrap";
import "./AddPatient.css";

function AddPatient(){

    const [firstname, setFirstName] = useState([])
    const [lastname, setLastName] = useState([])
    const [arrivaldate, setArrivalDate] = useState([])
    const [diagnoseId, setDiagnoseId] = useState([])
    const [courseId, setCourseId] = useState([])

    const [diagnose, setDiagnose] = useState([])
    const [course, setCourse] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                'https://localhost:5001/api/Diagnose',
            );
            const json = await res.json();
            setDiagnose(json);
        };
        fetchData();
    });

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                'https://localhost:5001/api/Course',
            );
            const json = await res.json();
            setCourse(json);
        };
        fetchData();
    });


    var id;

    const handleSubmit = e => {
      e.preventDefault();

      const patientData = {
          id,
          firstname,
          lastname,
          arrivaldate,
          diagnoseId,
          courseId
      }

      const requestOptions = {
          methos: "POST",
          header: {"Content-Type": "application/json"},
          body: JSON.stringify(patientData)
      };

      fetch("https://localhost:5001/api/Patient", requestOptions)
          .then(response => response.json())
          .then(res => console.log(res));

    };

    return(
        <div>
            <div className="form_block">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" value={lastname}
                                      onChange={(e) => setLastName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Arrival Date</Form.Label>
                        <Form.Control type="date" placeholder="Enter date" value={arrivaldate}
                                      onChange={(e) => setArrivalDate(e.target.value)} />
                    </Form.Group>
                    <Form.Label>Diagnose</Form.Label>
                    <Form.Select onChange={(e) => {setDiagnoseId(e.target.value)}}>
                        {diagnose.map(item => (
                                <option key={item.ObjectID}
                                        value={item.diagnosis_id}>
                                    {item.diagnosis_name}
                                </option>

                        ))}
                    </Form.Select>
                    <br />
                    <Form.Label>Course</Form.Label>
                    <Form.Select onChange={(e) => {setCourseId(e.target.value)}}>
                        {course.map(item => (
                            <option key={item.ObjectID}
                                    value={item.course_id}>
                                {item.course_name}
                            </option>

                        ))}
                    </Form.Select>
                    <br />
                    <Button variant="dark" type="submit" onClick={handleSubmit}>
                        Add
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default AddPatient;