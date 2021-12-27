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
    <div className="EmployeeInformation">
      <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" />
      <div className="nameSurname">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="name">
            <Form.Control
              autoFocus
              type="text"
              name="name"
              value={person.name}
              placeholder="Name"
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
              placeholder="Surname"
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
