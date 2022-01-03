/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ManagerMainPage.css";
import { LeftCircleOutlined } from "@ant-design/icons";
import { RightCircleOutlined } from "@ant-design/icons";

function CarsInformation(props) {
  const {
    brand,
    model,
    currentKm,
    carCondition,
    carStatus,
    color,
    deposit,
    description,
    fee,
    fuelConsuptionRate,
    fuelConsuptionType,
    insuranceSerialNumber,
    permitSerialNumber,
    plate,
    productionYear,
    seatingCapacity,
    transmissionType,
  } = props.car;
  return (
    <div className="CarsInformation">
      <div className="CarImage">
        {/* <LeftCircleOutlined
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "30px",
            marginLeft: "20px",
          }}
        />*/}

        <img src="https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/amg-gt/roadster/_jcr_content/image.MQ6.2.2x.20200318130703.png" />
        {/*<RightCircleOutlined
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "30px",
          }}
        /> */}
      </div>

      <div className="CarDetails">
        Car Brand {brand}
        <br />
        Car Model {model}
        <br />
        Car Color {color}
        <br />
        Fee {fee}
        <br />
        Current Km {currentKm}
        <br />
        Permit Serial Number {permitSerialNumber}
        <br />
        Insurance Serial Number {insuranceSerialNumber}
        <br />
        Fuel Consuption Rate {fuelConsuptionRate}
        <br />
        Fuel Consuption Type {fuelConsuptionType}
        <br />
        Car Condition {carCondition}
        <br />
        Car Status {carStatus}
        <br />
        Car Deposit {deposit}
        <br />
        Car Description {description}
        <br />
        Car Plate {plate}
        <br />
        Car Production Year {productionYear}
        <br />
        Car Seating Capacity {seatingCapacity}
        <br />
        Transmission Type {transmissionType}
      </div>
    </div>
  );
}

export default CarsInformation;
