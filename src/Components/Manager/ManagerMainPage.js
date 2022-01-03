/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import "./ManagerMainPage.css";
import CarsInformation from "./CarsInformation";
import EmployeeInformation from "./EmployeeInformation";
import TransportationInformation from "./TransportationInformation";
import Button from "react-bootstrap/Button";

function ManagerMainPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cars, setCars] = useState([]);
  const [employees, setEmployees] = useState([]);
  let managerId = localStorage.getItem("managerId");
  useEffect(() => {
    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/getallcar?manager_id=${managerId}`
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        if (result.body.cars) {
          const myCars = result.body.cars.map((car) => ({
            brand: car[0],
            model: car[1],
            currentKm: car[2],
            plate: car[3],
            carStatus: car[4],
            permitSerialNumber: car[5],
            insuranceSerialNumber: car[6],
            carCondition: car[7],
            color: car[8],
            fuelConsuptionType: car[9],
            fuelConsuptionRate: car[10],
            seatingCapacity: car[11],
            productionYear: car[12],
            description: car[13],
            fee: car[14],
            deposit: car[15],
            transmissionType: car[16],
          }));
          setCars(myCars);
        }
      });
    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/getallemployee?manager_id=${managerId}`
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        if (result.body.employees) {
          const myEmployees = result.body.employees.map((employee) => ({
            employeeId: employee[0],
            name: employee[1],
            surname: employee[2],
            email: employee[3],
            status: employee[4],
          }));
          setEmployees(myEmployees);
          console.log(myEmployees);
        }
      });
  }, [managerId]);

  return (
    <div className="ManagerMainPage">
      <div className="TopRow">
        <Button
          variant="secondary"
          style={{ backgroundColor: "black", marginBottom:"5%" }}
          href="/AddCarPage"
        >
          Add Car
        </Button>
        <Button
          variant="secondary"
          style={{ backgroundColor: "green", marginLeft: "10px",marginBottom:"5%" }}
          href="/CreateEmployeePage"
        >
          Create Employee
        </Button>
      </div>
      <div className="ManagerMainPageColumns">
        <div className="CarsColumn">
        <h2 style={{width:"100%", textAlign:"center"}}>CARS</h2>
          {" "}
          {cars && cars.map((car) => <CarsInformation car={car}/>)}
        </div>
        <div className="TransportationColumn">
          <h2 style={{width:"100%", textAlign:"center"}}> TRANSPORTATION VEHICLES</h2>
          {" "}
          <TransportationInformation />
          <TransportationInformation />
          <TransportationInformation />
          <TransportationInformation />
          <TransportationInformation />
        </div>
        <div className="Employees">
          <h2 style={{width:"100%", textAlign:"center"}}> EMPLOYEES</h2>
          <li style={{width:"100%", textAlign:"left", marginTop:"5%", marginLeft:"5%", color:"red", fontWeight:"bold"}}>Best Employee:<span style={{color:"black"}}>&nbsp;Hakan</span></li>
          <li style={{width:"100%", textAlign:"left", marginTop:"5%", marginLeft:"5%", color:"red", fontWeight:"bold"}}>Worst Employee:<span style={{color:"black"}}>&nbsp;Berke</span></li>
          {" "}
          {employees &&
            employees.map((employee) => (
              <EmployeeInformation employee={employee} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ManagerMainPage;
