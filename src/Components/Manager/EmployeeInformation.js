/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import "./ManagerMainPage.css";

function EmployeeInformation() {
  const [person, setPerson] = useState({
    name: "",
    surname: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div
      className="EmployeeInformation"
      style={{ margin: "auto", width: "50%", padding: "10px" }}
    >
      <div
        className="nameSurname"
        style={{ margin: "auto", width: "50%", border: "3px", padding: "10px" }}
      >
        <img
          style={{ margin: "auto", width: "50%", padding: "10px" }}
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
        ></img>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="name">
            <Form.Control
              autoFocus
              type="text"
              name="name"
              value={person.name}
              placeholder="Name: "
              style={{ marginTop: "5px" }}
              disabled
            />
          </Form.Group>

          <Form.Group size="lg" controlId="surname">
            <Form.Control
              autoFocus
              type="text"
              name="surname"
              value={person.surname}
              placeholder="Surname: "
              style={{ marginTop: "20px" }}
              disabled
            />
          </Form.Group>
          <Form.Group size="lg" controlId="email">
            <Form.Control
              autoFocus
              type="text"
              name="email"
              value={person.email}
              placeholder="Email: "
              style={{ marginTop: "20px" }}
              disabled
            />
          </Form.Group>
          <Form.Group size="lg" controlId="branch">
            <Form.Control
              autoFocus
              type="text"
              name="branch"
              value={person.branch}
              placeholder="Branch: "
              style={{ marginTop: "20px" }}
              disabled
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default EmployeeInformation;
