/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./AddCarPage.css";
import Button from "react-bootstrap/Button";

function AddCarPage() {
  return (
    <div className="AddCarPage">
      <div className="carImage">
        <img
          style={{ width: "100%" }}
          src="https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/amg-gt/roadster/_jcr_content/image.MQ6.2.2x.20200318130703.png"
        />
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
      <div className="carInfoForm">
        <div className="carInfoColumn">
          Brand
          <input type="text" />
          Model
          <input type="text" />
          Color
          <input type="text" />
          Current km
          <input type="text" />
          Plate
          <input type="text" />
          Fee
          <input type="text" />
          Permit Serial Number
          <input type="text" />
          Insurance Serial Number
          <input type="text" />
          Car Condition
          <input type="text" />
        </div>
        <div className="carInfoColumn">
          Fuel Consumption Type
          <input type="text" />
          Fuel Consumption Rate
          <input type="text" />
          Seating Capacity
          <input type="text" />
          Production Year
          <input type="text" />
          Description
          <input type="text" />
          Deposit
          <input type="text" />
          Transmission Type
          <input type="text" />
          <div className="AddCarButton">
            <Button
              variant="secondary"
              style={{ backgroundColor: "black", width: "80%" }}
            >
              Add Car
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCarPage;
