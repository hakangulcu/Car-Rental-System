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

function SignUp() {
    /**
    
    const [show, setShowForm] = useState(false);

    const showForm = () => {
        setShowForm(!showForm);
    }
     * 
     */

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

                    placeholder="Name"  
                    style={{ marginTop: "10%" }}
                  />
          
                </Form.Group>

                <Form.Group size="lg" controlId="surname">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    style={{ marginTop: "20px" }}
                  />
                  
                </Form.Group>
                <Form.Group size="lg" controlId="natiaonalId">
                  <Form.Control
                    autoFocus
                    type="number"
                    name="national_id"
                    placeholder="National Id"
                    style={{ marginTop: "20px" }}
                  />
                </Form.Group>
                <Form.Group size="lg" controlId="email">
                  <Form.Control
                    autoFocus
                    type="email"
                    name="email"
                    placeholder="Email"
                    style={{ marginTop: "20px" }}
                  />
               
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Control
                    autoFocus
                    type="password"
                    name="password"
                    placeholder="Password"
                    style={{ marginTop: "20px" }}
                  />
        
                </Form.Group>

                <Form.Group size="lg" controlId="verifyPassword">
                  <Form.Control
                    autoFocus
                    type="password"
                    name="verifyPassword"
                    placeholder="Verify Password"
                    style={{ marginTop: "20px" }}
                  />
                 
                </Form.Group>

                <Form.Group size="lg" controlId="address">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="address"
                    placeholder="Address"
                    style={{ marginTop: "20px" }}
                  />
              
                </Form.Group>

                <Form.Group size="lg" controlId="contact_number">
                  <Form.Control
                    autoFocus
                    type="number"
                    name="contact_number"
                    placeholder="Contact Number"
                    style={{ marginTop: "20px" }}
                  />
               
                </Form.Group>

                <Form.Group size="lg" controlId="salary">
                  <Form.Control
                    autoFocus
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    style={{ marginTop: "20px" }}
                  />
                </Form.Group>


                <Form.Group size="lg" controlId="leave">
                  <Form.Control
                    autoFocus
                    type="number"
                    name="leave"
                    placeholder="Allowed Leave Number"
                    style={{ marginTop: "20px" }}
                  />
                </Form.Group>
      
                <Form.Group size="lg" controlId="perday">
                  <Form.Control
                    autoFocus
                    type="number"
                    name="perday"
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
                  Create
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
                            placeholder="City"  
                            style={{ marginTop: "10%" }}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="branchName">
                        <Form.Control
                            autoFocus
                            type="text"
                            name="branchName"
                            placeholder="Branch Name"  
                            style={{ marginTop: "5px" }}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="address">
                        <Form.Control
                            autoFocus
                            type="text"
                            name="address"
                            placeholder="Address"  
                            style={{ marginTop: "5px" }}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="companyName">
                        <Form.Control
                            autoFocus
                            type="text"
                            name="companyName"
                            placeholder="Company Name"  
                            style={{ marginTop: "5px" }}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="managerEmail">
                        <Form.Control
                            autoFocus
                            type="text"
                            name="managerEmail"
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
                  Create
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
                            placeholder="Company Name"  
                            style={{ marginTop: "10%" }}
                        />
                    </Form.Group>
                    <Form.Group size="xxl" controlId="description">
                        <Form.Control
                            autoFocus
                            type="text"
                            name="description"
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

export default SignUp;
