import React from "react";
import "./ManagerMainPage.css";
import CarsInformation from "./CarsInformation";
import EmployeeInformation from "./EmployeeInformation";
import TransportationInformation from "./TransportationInformation";
import Button from "react-bootstrap/Button";

function ManagerMainPage() {
  return (
    <div className="ManagerMainPage">
      <div className="TopRow">
        <Button
          variant="secondary"
          style={{ backgroundColor: "black" }}
          href="/AddCarPage"
        >
          Add Car
        </Button>
        <Button
          variant="secondary"
          style={{ backgroundColor: "green", marginLeft: "10px" }}
          href="/CreateEmployeePage"
        >
          Create Employee
        </Button>
      </div>
      <div className="ManagerMainPageColumns">
        <div className="CarsColumn">
          {" "}
          <CarsInformation />
          <CarsInformation />
          <CarsInformation />
          <CarsInformation />
        </div>
        <div className="TransportationColumn">
          {" "}
          <TransportationInformation />
          <TransportationInformation />
          <TransportationInformation />
          <TransportationInformation />
          <TransportationInformation />
          <TransportationInformation />
          <TransportationInformation />
        </div>
        <div className="Employees">
          {" "}
          <EmployeeInformation />
          <EmployeeInformation />
          <EmployeeInformation />
          <EmployeeInformation />
          <EmployeeInformation />
          <EmployeeInformation />
          <EmployeeInformation />
        </div>
      </div>
    </div>
  );
}

export default ManagerMainPage;
