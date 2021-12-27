import React from "react";
import "./ManagerMainPage.css";
import CarsInformation from "./CarsInformation";
import EmployeeInformation from "./EmployeeInformation";
import Button from "react-bootstrap/Button";

function ManagerMainPage() {
  return (
    <div className="ManagerMainPage">
      <div className="TopRow">
        <Button variant="secondary" style={{ backgroundColor: "black" }}>
          Add Car
        </Button>
        <Button
          variant="secondary"
          style={{ backgroundColor: "green", marginLeft: "10px" }}
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
