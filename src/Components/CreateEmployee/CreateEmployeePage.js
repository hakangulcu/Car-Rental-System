/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { React, useState } from "react";
import "./CreateEmployeePage.css";
import { Radio } from "antd";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateEmployeePage() {
  const [value, setValue] = useState(1);
  const [dateBirth, setDateBirth] = useState(new Date());

  const [person, setPerson] = useState({
    name: "",
    surname: "",
    email: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
    number: "",
    address: "",
    branch: "",
    salary: "",
    shiftHours: "",
    allowedLeaveNumber: "",
    workHoursPerDay: "",
    employeeType: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
  }

  const handleChange = (e) => {
    setPerson((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="CreateEmployeePage">
      <div className="EmployeeImage">
        <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" />
        <div className="editImage">
          <span>
            {" "}
            <a href="#">Remove Image</a>
          </span>{" "}
          |{" "}
          <span>
            <a href="#">Change Image</a>
          </span>
        </div>
      </div>
      <div className="EmployeeInformationForm">
        <div className="EmployeeInformationColumn">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="name">
              <Form.Control
                autoFocus
                type="text"
                name="name"
                value={person.name}
                placeholder="Name"
                onChange={handleChange}
                style={{ marginTop: "5px" }}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="surname">
              <Form.Control
                autoFocus
                type="text"
                name="surname"
                value={person.surname}
                placeholder="Surname"
                onChange={handleChange}
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
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>

            <div>
              <label
                style={{
                  marginTop: "5px",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "grey",
                  fontStyle: "italic",
                }}
              >
                Brith Day
              </label>

              <DatePicker
                selected={dateBirth}
                onChange={(date) => setDateBirth(date)}
              />
            </div>
            <Form.Group size="lg" controlId="password">
              <Form.Control
                type="password"
                value={person.password}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="confirmPassword">
              <Form.Control
                type="password"
                name="confirmPassword"
                value={person.confirmPassword}
                placeholder="Confirm Password"
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="address">
              <Form.Control
                type="text"
                name="address"
                value={person.address}
                placeholder="Address"
                onChange={handleChange}
                style={{ marginTop: "10px", marginBottom: "10px" }}
              />
            </Form.Group>
          </Form>

          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Female</Radio>
            <Radio value={2}>Male</Radio>
          </Radio.Group>
        </div>

        <div className="EmployeeInformationColumn">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="branch">
              <Form.Control
                autoFocus
                type="text"
                name="branch"
                value={person.branch}
                placeholder="Branch"
                onChange={handleChange}
                style={{ marginTop: "5px" }}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="salary">
              <Form.Control
                autoFocus
                type="number"
                name="salary"
                value={person.salary}
                placeholder="Salary"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="allowedLeaveNumber">
              <Form.Control
                autoFocus
                type="number"
                name="allowedLeaveNumber"
                value={person.allowedLeaveNumber}
                placeholder="Allowed Leave Number"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="workHoursPerDay">
              <Form.Control
                autoFocus
                type="number"
                name="workHoursPerDay"
                value={person.workHoursPerDay}
                placeholder="Work Hours Per Day"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="employeeType">
              <Form.Control
                autoFocus
                type="text"
                name="employeeType"
                value={person.employeeType}
                placeholder="Employee Type"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="shiftHours">
              <Form.Control
                autoFocus
                type="text"
                name="shiftHours"
                value={person.shiftHours}
                placeholder="Shift Hours"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>
          </Form>

          <div className="AddButton">
            <Button
              variant="secondary"
              style={{ backgroundColor: "black", width: "150px" }}
            >
              Create Employee
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployeePage;
