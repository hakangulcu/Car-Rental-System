/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ManagerMainPage.css";
import { LeftCircleOutlined } from "@ant-design/icons";
import { RightCircleOutlined } from "@ant-design/icons";

function TransportationInformation() {
  return (
    <div className="TransportationInformation">
      <div className="TransportationImage">
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

      <div className="TransportationDetails">
        plate
        <br />
        permit_serial_number
        <br />
        Color
        <br />
        insurance_serial_number
        <br />
        brand_name
        <br />
        model_name
        <br />
        capacity km_price
      </div>
    </div>
  );
}

export default TransportationInformation;
