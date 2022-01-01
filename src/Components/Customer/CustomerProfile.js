/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState, useEffect } from "react";
import "./customerProfile.css";
import profileImage from "../../images/profile.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Popup from "../popUp/Popup";
import bmwI8 from "../../images/bmw-i8.png";

function CustomerProfile() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [dateBirth, setDateBirth] = useState(new Date());
  const [licenceDate, setLicenceDate] = useState(new Date());
  const [message, setMessage] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [editPopUp, setEditPopUp] = useState(false);
  const [person, setPerson] = useState({
    name: "",
    surname: "",
    email: "",
    birth_date: "",
    contact_number: "",
    address: "",
    account_status: "",
    license_type: "",
    given_date: "",
  });

  let customerEmail = localStorage.getItem("customerEmail");
  let customerPassword = localStorage.getItem("customerPassword");

  useEffect(() => {
    let customerEmail = localStorage.getItem("customerEmail");
    let customerPassword = localStorage.getItem("customerPassword");
    const getProfileProperties = (e) => {
      fetch(
        `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/customerprofile?email=${customerEmail}`
      )
        .then((response) => response.json())
        .then(
          (result) => {
            setIsLoaded(true);
            result.body &&
              Object.keys(result.body).map((key) => {
                let properties = result.body[key];
                setPerson((prevValues) => {
                  return {
                    ...prevValues,
                    [key]: properties,
                  };
                });
                let birthDate = new Date(result.body.birth_date);
                setDateBirth(birthDate);
                let licence_date = new Date(result.body.given_date);
                setLicenceDate(licence_date);
                return true;
              });
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    };
    getProfileProperties();
  }, []);

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

  const handleChangePassword = (e) => {
    if (customerPassword === oldPassword) {
      fetch(
        `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/changepassword?email=${customerEmail}&old_password=123&new_password=${newPassword}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            if (result.body["message"] === "executionTrue") {
              setMessage("Password Change is Successfull");
              clickHandler();
            } else if (result.body["message"] === "executionFalse") {
              setMessage("Password Change is Unsuccessfull !!!!!!!");
              console.log(message);
              clickHandler();
            } else {
              alert("Database Connection Get Error");
            }
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    } else {
      setMessage("Old password is wrong");
      console.log(message);
      clickHandler();
    }
  };

  if (person.name === "") {
    return (
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Loading .....</div>
      </Popup>
    );
  }

  const clickHandler = () => {
    setPopUp(true);
  };

  return (
    <div className="customer-profile">
      <div className="profile-image" style={{ marginTop: "3%" }}>
        <img src={profileImage} alt="" />
        <br></br>
        <a href="#">Remove Image </a>
        <br></br>
        <a href="#">Change Image</a>

        <Form.Group size="lg" controlId="password">
          <Form.Control
            type="password"
            value={oldPassword}
            placeholder="Old Password"
            onChange={(e) => setOldPassword(e.target.value)}
            style={{ marginTop: "20px" }}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Control
            type="password"
            value={newPassword}
            placeholder="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
            style={{ marginTop: "10px" }}
          />
        </Form.Group>
        <br></br>
        <Button
          variant="secondary"
          style={{ backgroundColor: "black" }}
          onClick={handleChangePassword}
        >
          Change Password
        </Button>
      </div>

      <div className="profile-information" style={{ marginTop: "5%" }}>
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

          <Form.Group size="lg" controlId="account_status">
            <Form.Control
              autoFocus
              type="text"
              name="account_status"
              value={person.account_status}
              placeholder="Account Status"
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
              Birth Day
            </label>

            <DatePicker
              selected={dateBirth}
              dateFormat={"dd/MM/yyyy"}
              onChange={(date) => setDateBirth(date)}
            />
          </div>

          <Form.Group size="lg" controlId="license_type">
            <Form.Control
              autoFocus
              type="text"
              name="license_type"
              value={person.license_type}
              placeholder="Licence Type"
              onChange={handleChange}
              style={{ marginTop: "20px" }}
            />
          </Form.Group>
          <div style={{ marginTop: "20px", alignItems: "left" }}>
            <label
              style={{
                marginTop: "5px",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "grey",
                fontStyle: "italic",
              }}
            >
              Licence Given Date
            </label>
            <br />
            <DatePicker
              selected={licenceDate}
              dateFormat={"dd/MM/yyyy"}
              onChange={(date) => setLicenceDate(date)}
            />
          </div>
          <Form.Group size="lg" controlId="contact_number">
            <Form.Control
              autoFocus
              type="number"
              name="contact_number"
              value={person.contact_number}
              placeholder="Contact Number"
              onChange={handleChange}
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
              onChange={handleChange}
              style={{ marginTop: "20px" }}
            />
          </Form.Group>
          <br></br>
          <Button variant="secondary" style={{ backgroundColor: "red" }}>
            Save Changes
          </Button>
        </Form>
      </div>
      <div className="rental-information">
        <h3
          style={{
            marginTop: "0 auto",
            marginBottom: "5%",
            marginLeft: "20%",
            fontWeight: "bold",
            color: "black",
            fontStyle: "italic",
          }}
        >
          Previous Rental Information
        </h3>
        <div className="carInformation">
          <div className="image">
            <img
              src={bmwI8}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                display: "block",
                margin: "auto",
              }}
            />
          </div>
          <div className="information" style={{ marginLeft: "5%" }}>
            Car Brand
            <br />
            Car Model
            <br />
            Color
            <br />
            Total Fee
            <br />
            Rented/Transported Dates
            <br />
            Car Rental Condition
            <br />
            Feedback
            <br />
            Rental Type
          </div>
        </div>
        <div className="carInformation">
          <div className="image">
            <img
              src={bmwI8}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                display: "block",
                margin: "auto",
              }}
            />
          </div>
          <div className="information" style={{ marginLeft: "5%" }}>
            Car Brand
            <br />
            Car Model
            <br />
            Color
            <br />
            Total Fee
            <br />
            Rented/Transported Dates
            <br />
            Car Rental Condition
            <br />
            Feedback
            <br />
            Rental Type
          </div>
        </div>
      </div>
      <Popup trigger={popUp} setPopUp={setPopUp} message={message} />
    </div>
  );
}

export default CustomerProfile;
