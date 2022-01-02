/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import img1 from "../../images/carRental.jpg";
import SwitchButton from "../Switch/SwitchButton";
import { useLocation, useNavigate } from "react-router-dom";
import Popup from "../popUp/Popup";

import "./AdminPage.css";
////https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/addmanager?name=${person.name}&surname=${person.surname}&date=${person.birthDate}&national_id=${person.nationalId}&email=${person.email}&password=${person.password}&address=${person.address}&contact_number=${person.contactNumber}&salary=${person.salary}&allowed_leave_number=${person.allowedLeaveNumber}&work_hours_per_day=${person.workHoursPerDay}

function AdminPage() {
  
  const [person, setPerson] = useState({
    name: "",
    surname: "",
    email: "",
    nationalId: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    address: "",
    salary: "",
    allowedLeaveNumber: "",
    workHoursPerDay: "",
  });

  const [branch,setBranch] = useState({
    branchCity:"",
    branchName:"",
    branchAddress:"",
    branchCompanyName: "",
    branchManagerEmail:"",
  });
  
  const [company,setCompany] = useState({
    companyCompanyName:"",
    companyDescription:"",
  });

  let navigate = useNavigate();

  function validateFormManager() {
    return (
      person.name.length > 0 &&
      person.surname.length > 0 &&
      person.email.length > 0 &&
      person.national_id.length > 0 &&
      person.password.length > 0 &&
      person.confirmPassword.length > 0 &&
      person.address.length > 0 &&
      person.contact_number.length > 0 &&
      person.salary.length > 0 &&
      person.allowedLeaveNumber.length > 0 &&
      person.workHoursPerDay.length > 0
    );
  }

  function validateFormBranch() {
    return (
      person.branchCity.length > 0 &&
      person.branchName.length > 0 &&
      person.branchAddress.length > 0 &&
      person.branchCompanyName.length > 0 &&
      person.branchManagerEmail.length > 0
    );
  }

  function validateFormCompany() {
    return (
      person.companyCompanyName.length > 0 &&
      person.companyDescription.length > 0
    );
  }

  return (
    <div id="adminPageCSS">
      <Container >
        <Row>
          {/*<SwitchButton /> */}
        <Col>
            <div className="addManager">
            <h3 style={{marginTop:"15%"}}> ADD MANAGER </h3>
              <Form/>
                <Form.Group size="lg" controlId="name">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="name"
                    value={person.name}
                    placeholder="Name"  
                    style={{ marginTop: "10%" }}
                  />
          
                </Form.Group>

                <Form.Group size="lg" controlId="surname">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="surname"
                    value={person.surname}
                    placeholder="Surname"
                    style={{ marginTop: "20px" }}
                  />
                  
                </Form.Group>
                <Form.Group size="lg" controlId="natiaonalId">
                  <Form.Control
                    autoFocus
                    type="number"
                    name="national_id"
                    value={person.nationalId}
                    placeholder="National Id"
                    style={{ marginTop: "20px" }}
                  />
                </Form.Group>
                <Form.Group size="lg" controlId="email">
                  <Form.Control
                    autoFocus
                    type="email"
                    name="email"
                    value={person.email}
                    placeholder="Email"
                    style={{ marginTop: "20px" }}
                  />
               
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Control
                    autoFocus
                    type="password"
                    name="password"
                    value={person.password}
                    placeholder="Password"
                    style={{ marginTop: "20px" }}
                  />
        
                </Form.Group>

                <Form.Group size="lg" controlId="verifyPassword">
                  <Form.Control
                    autoFocus
                    type="password"
                    name="verifyPassword"
                    value={person.confirmPassword}
                    placeholder="Verify Password"
                    style={{ marginTop: "20px" }}
                  />
                 
                </Form.Group>

                <Form.Group size="lg" controlId="address">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="address"
                    value={person.address}
                    placeholder="Address"
                    style={{ marginTop: "20px" }}
                  />
              
                </Form.Group>

                <Form.Group size="lg" controlId="contact_number">
                  <Form.Control
                    autoFocus
                    type="number"
                    name="contact_number"
                    value={person.contactNumber}
                    placeholder="Contact Number"
                    style={{ marginTop: "20px" }}
                  />
               
                </Form.Group>

                <Form.Group size="lg" controlId="salary">
                  <Form.Control
                    autoFocus
                    type="number"
                    name="salary"
                    value={person.salary}
                    placeholder="Salary"
                    style={{ marginTop: "20px" }}
                  />
                </Form.Group>


                <Form.Group size="lg" controlId="leave">
                  <Form.Control
                    autoFocus
                    type="number"
                    name="leave"
                    value={person.allowedLeaveNumber}
                    placeholder="Allowed Leave Number"
                    style={{ marginTop: "20px" }}
                  />
                </Form.Group>
      
                <Form.Group size="lg" controlId="perday">
                  <Form.Control
                    autoFocus
                    type="number"
                    name="perday"
                    value={person.workHoursPerDay}
                    placeholder="Work Hours Per Day"
                    style={{ marginTop: "20px" }}
                  />
                </Form.Group>

                <Button
                  style={{ marginTop: "10px", width: "150px" }}
                  block="true"
                  size="lg"
                  type="submit"
                >
                  Add
                </Button>
             
            </div>
          </Col>
          <Col>
            <div className="addBranch">
                <h3 style={{marginTop:"15%"}}> ADD BRANCH </h3>
                <Form>
                    <Form.Group size="lg" controlId="city">
                        <Form.Control
                            autoFocus
                            type="text"
                            name="city"
                            value={branch.branchCity}
                            placeholder="City"  
                            style={{ marginTop: "10%" }}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="branchName">
                        <Form.Control
                            autoFocus
                            type="text"
                            name="branchName"
                            value={branch.branchName}
                            placeholder="Branch Name"  
                            style={{ marginTop: "5px" }}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="address">
                        <Form.Control
                            autoFocus
                            type="text"
                            name="address"
                            value={branch.branchAddress}
                            placeholder="Address"  
                            style={{ marginTop: "5px" }}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="companyName">
                        <Form.Control
                            autoFocus
                            type="text"
                            name="companyName"
                            value={branch.branchCompanyName}
                            placeholder="Company Name"  
                            style={{ marginTop: "5px" }}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="managerEmail">
                        <Form.Control
                            autoFocus
                            type="text"
                            name="managerEmail"
                            value={branch.branchManagerEmail}
                            placeholder="Manager Email"  
                            style={{ marginTop: "5px" }}
                        />
                    </Form.Group>
                </Form>
                <Button
                  style={{ marginTop: "10px", width: "150px" }}
                  block="true"
                  size="lg"
                  type="submit"
                >
                  Add
                </Button>
            </div>
          </Col>
          <Col>
          <div className="createCompany">
              <h3 style={{marginTop:"15%"}}> CREATE COMPANY </h3>
              <Form>
                    <Form.Group size="lg" controlId="companyName">
                        <Form.Control
                            autoFocus
                            type="text"
                            name="companyName"
                            value={company.companyCompanyName}
                            placeholder="Company Name"  
                            style={{ marginTop: "10%" }}
                        />
                    </Form.Group>
                    <Form.Group size="xxl" controlId="description">
                        <Form.Control
                            autoFocus
                            type="text"
                            name="description"
                            value={company.companyDescription}
                            placeholder="Description"  
                            style={{ marginTop: "5px" }}
                        />
                    </Form.Group>
                    <Button
                        style={{ marginTop: "10px", width: "150px" }}
                        block="true"
                        size="lg"
                        type="submit"
                        >
                        Create
                    </Button>
              </Form>
          </div>
          </Col>
        </Row>
      </Container>
     
    </div>
  );
}

export default AdminPage;
