import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup"
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

function EmployeeMainPage(){
    const [info, setInfo] = useState({
        customerName: "",
        customerType: "",
        carBrand: "",
        model: "",
        rentDate: "",
        customerNationalId: "",
        customerLicense: "",
        customerPoint: "",
        contactNumber: "",
        takenFrom: "",
        willreturn:"",
        rentalType: "",
      });

      const [rentDate, setrentDate] = useState(new Date());
    return(
    <div className="employeeMain">
        <Container>
            <Row style={{marginTop:"2%", border: "2px solid black"}}>
                <Col>
                <img src="https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/amg-gt/roadster/_jcr_content/image.MQ6.2.2x.20200318130703.png" />
                </Col>
                <Col>
                    <ListGroup variant="flush">
                        <ListGroup.Item
                            controlId="customerName" 
                            autoFocus
                            type="text"
                            name="customerName"
                            value={info.customerName}
                        >
                        Customer Name</ListGroup.Item>
                        <ListGroup.Item
                            controlId="customerType" 
                            autoFocus
                            type="text"
                            name="customerType"
                            value={info.customerType}
                        >
                        Customer Type</ListGroup.Item>
                        <ListGroup.Item
                            controlId="carBrand" 
                            autoFocus
                            type="text"
                            name="carBrand"
                            value={info.carBrand}
                        >
                        Car Brand</ListGroup.Item>
                        <ListGroup.Item
                            controlId="model" 
                            autoFocus
                            type="text"
                            name="model"
                            value={info.model}
                        >
                        Model</ListGroup.Item>
                        <ListGroup.Item
                            controlId="rentDate" 
                            autoFocus
                            type="text"
                            name="rentDate"
                            value={info.rentDate}
                        >
                        Rent Date</ListGroup.Item>
                        <ListGroup.Item
                            controlId="customerNationalId" 
                            autoFocus
                            type="number"
                            name="customerNationalId"
                            value={info.customerNationalId}
                        >
                        Customer National ID</ListGroup.Item>
                        <ListGroup.Item
                            controlId="customerLicense" 
                            autoFocus
                            type="number"
                            name="customerLicense"
                            value={info.customerLicense}
                        >
                        Customer License</ListGroup.Item>
                        <ListGroup.Item
                            controlId="customerPoint" 
                            autoFocus
                            type="text"
                            name="customerPoint"
                            value={info.customerPoint}
                        >
                        Customer Point</ListGroup.Item>
                        <ListGroup.Item
                            controlId="contactNumber" 
                            autoFocus
                            type="number"
                            name="contactNumber"
                            value={info.contactNumber}
                        >
                        Contact Number</ListGroup.Item>
                        <ListGroup.Item
                            controlId="takenFrom" 
                            autoFocus
                            type="text"
                            name="takenFrom"
                            value={info.takenFrom}
                        >
                        Taken From</ListGroup.Item>
                        <ListGroup.Item
                            controlId="willreturn" 
                            autoFocus
                            type="text"
                            name="willreturn"
                            value={info.willreturn}
                        >
                        Will Return</ListGroup.Item>
                        <ListGroup.Item
                            controlId="rentalType" 
                            autoFocus
                            type="text"
                            name="rentalType"
                            value={info.rentalType}
                        >
                        Rental Type</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <Button
                    style={{ marginLeft: "30%", marginTop: "50%",  }}
                    block="true"
                    size="lg"
                    type="submit"
                    >
                    Accept
                    </Button>
                    <Button
                    style={{ marginLeft: "10%", marginTop: "50%", }}
                    block="true"
                    size="lg"
                    type="submit"
                    >
                    Decline
                    </Button>
                </Col>
            </Row>
        </Container>
    </div>

    );
}

export default EmployeeMainPage;