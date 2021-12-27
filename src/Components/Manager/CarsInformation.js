/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ManagerMainPage.css";
import { LeftCircleOutlined } from "@ant-design/icons";
import { RightCircleOutlined } from "@ant-design/icons";

function CarsInformation() {
  return (
    <div className="CarsInformation">
      <div className="CarImage">
        <LeftCircleOutlined
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "30px",
            marginLeft: "20px",
          }}
        />
        <img src="https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/amg-gt/roadster/_jcr_content/image.MQ6.2.2x.20200318130703.png" />
        <RightCircleOutlined
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "30px",
          }}
        />
      </div>
      <div className="CarDetails">
        Car Brand
        <br />
        Car Model
        <br />
        Color
        <br />
        Fee
        <br />
        Km
        <br />
        Permit Serial Number
        <br />
        Insurance Information
        <br />
        Current Fuel
        <br />
        Accessories
        <br />
        Car Condition
        <br />
        Status
      </div>
    </div>
  );
}

export default CarsInformation;
