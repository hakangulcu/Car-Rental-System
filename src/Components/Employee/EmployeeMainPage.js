/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { BsPersonSquare } from "react-icons/bs";
import { BsCalendar2DateFill } from "react-icons/bs";
import { AiFillIdcard } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import img1 from "../../images/carRental.jpg";
import SwitchButton from "../Switch/SwitchButton";
import { useLocation, useNavigate } from "react-router-dom";
import Popup from "../popUp/Popup";

function EmployeeMainPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [info, setInfo] = useState([]);
  const [rentDate, setrentDate] = useState(new Date());
  useEffect(() => {
    let managerId = localStorage.getItem("employeeId");

    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/getrequests?employee_id=${managerId}`
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);

        if (result.body.requests) {
          const infos = result.body.requests.map((request) => ({
            customerName: request[0],
            customerSurname: request[1],
            carBrand: request[2],
            model: request[3],
            startDate: request[4],
            endDate: request[5],
            customerNationalId: request[6],
            customerLicense: request[7],
            contactNumber: request[8],
          }));
          setInfo(infos);
        }
      });
  }, []);

  const handleAccept = () => {};
  const handleDecline = () => {};

  return (
    <div className="employeeMain">
      {info &&
        info.map((inf) => (
          <Container>
            <Row
              style={{
                marginTop: "2%",
                border: "2px solid black",
              }}
            >
              <Col>
                <img
                  src="https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/amg-gt/roadster/_jcr_content/image.MQ6.2.2x.20200318130703.png"
                  alt=""
                />
              </Col>
              <Col>
                <ListGroup variant="flush">
                  <ListGroup.Item
                    controlId="customerName"
                    autoFocus
                    type="text"
                    name="customerName"
                    value={inf.customerName}
                  >
                    Customer Name:{" "}
                    {inf.customerName.substring(0, 1).toUpperCase() +
                      inf.customerName.substring(1, inf.customerName.length)}
                  </ListGroup.Item>
                  <ListGroup.Item
                    controlId="customerSurname"
                    autoFocus
                    type="text"
                    name="customerSurname"
                    value={inf.customerSurname}
                  >
                    Customer Surname :{" "}
                    {inf.customerSurname.substring(0, 1).toUpperCase() +
                      inf.customerSurname.substring(
                        1,
                        inf.customerSurname.length
                      )}
                  </ListGroup.Item>
                  <ListGroup.Item
                    controlId="carBrand"
                    autoFocus
                    type="text"
                    name="carBrand"
                    value={inf.carBrand}
                  >
                    Car Brand :{" "}
                    {inf.carBrand.substring(0, 1).toUpperCase() +
                      inf.carBrand.substring(1, inf.carBrand.length)}
                  </ListGroup.Item>
                  <ListGroup.Item
                    controlId="model"
                    autoFocus
                    type="text"
                    name="model"
                    value={inf.model}
                  >
                    Car Model :{" "}
                    {inf.model.substring(0, 1).toUpperCase() +
                      inf.model.substring(1, inf.model.length)}
                  </ListGroup.Item>
                  <ListGroup.Item
                    controlId="startDate"
                    autoFocus
                    type="text"
                    name="startDate"
                    value={inf.startDate}
                  >
                    Start Date :{" "}
                    {inf.startDate.substring(0, 1).toUpperCase() +
                      inf.startDate.substring(1, inf.startDate.length)}
                  </ListGroup.Item>
                  <ListGroup.Item
                    controlId="endDate"
                    autoFocus
                    type="text"
                    name="endDate"
                    value={inf.endDate}
                  >
                    End Date :{" "}
                    {inf.endDate.substring(0, 1).toUpperCase() +
                      inf.endDate.substring(1, inf.endDate.length)}
                  </ListGroup.Item>
                  <ListGroup.Item
                    controlId="customerNationalId"
                    autoFocus
                    type="number"
                    name="customerNationalId"
                    value={inf.customerNationalId}
                  >
                    Customer National ID :{" "}
                    {inf.customerNationalId.substring(0, 1).toUpperCase() +
                      inf.customerNationalId.substring(
                        1,
                        inf.customerNationalId.length
                      )}
                  </ListGroup.Item>
                  <ListGroup.Item
                    controlId="customerLicense"
                    autoFocus
                    type="number"
                    name="customerLicense"
                    value={inf.customerLicense}
                  >
                    Customer License :{" "}
                    {inf.customerLicense.substring(0, 1).toUpperCase() +
                      inf.customerLicense.substring(
                        1,
                        inf.customerLicense.length
                      )}
                  </ListGroup.Item>
                  <ListGroup.Item
                    controlId="contactNumber"
                    autoFocus
                    type="text"
                    name="contactNumber"
                    value={inf.contactNumber}
                  >
                    Contact Number :{" "}
                    {inf.contactNumber.substring(0, 1).toUpperCase() +
                      inf.contactNumber.substring(1, inf.contactNumber.length)}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col>
                <Button
                  style={{ marginLeft: "30%", marginTop: "50%" }}
                  block="true"
                  size="lg"
                  type="submit"
                  onClick={handleAccept}
                >
                  Accept
                </Button>
                <Button
                  style={{ marginLeft: "10%", marginTop: "50%" }}
                  block="true"
                  size="lg"
                  type="submit"
                  onClick={handleDecline}
                >
                  Decline
                </Button>
              </Col>
            </Row>
          </Container>
        ))}
    </div>
  );
}

export default EmployeeMainPage;
