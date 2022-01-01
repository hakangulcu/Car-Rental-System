/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./SearchCarCustomer.css";
import { Switch, Input, Checkbox, DatePicker, Space, Col } from "antd";
import "antd/dist/antd.css";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { Select } from "antd";
const { Search } = Input;

const { Option } = Select;

const dateFormat = "YYYY/MM/DD";

function SearchCarCustomer() {
  function onSearch(event) {}
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div className="SearchCarCustomer">
      <div className="TopBar">
        <div className="search">
          <Search
            placeholder="Please enter brand"
            style={{ textAlign: "center" }}
            onSearch={onSearch}
            enterButton
          />
        </div>
        <div className="toggle-button">
          <div>
            <h4>Rent / Transporter</h4>
          </div>
          <div>
            <Switch defaultChecked="transporter" />
          </div>
        </div>
      </div>
      <div className="showcase-screen">
        <div className="showcase-screen-left">
          <div className="branch">
            <div style={{marginLeft:"20%", marginTop:"5%",}}>
              <h3>Branch</h3>
            </div>

            <div style={{marginLeft:"30%", marginTop:"5%",}}>
              <Select
                defaultValue="istanbul"
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="istanbul">istanbul</Option>
                <Option value="ankara">ankara</Option>
                <Option value="izmir">izmir</Option>
              </Select>
            </div>
          </div>

          <h4 style={{marginLeft:"20%", marginTop:"5%",}}>Brand</h4>
          <div className="brand">
            <Checkbox.Group
              style={{
                width: "35%",
                padding: "10px",
                marginLeft: "20%"
              }}
            >
              <Col>
                <Checkbox value="A" style={{ marginBottom: "25px" }}>
                  A
                </Checkbox>
              </Col>
              <Col>
                <Checkbox value="B" style={{ marginBottom: "25px" }}>
                  B
                </Checkbox>
              </Col>
              <Col>
                <Checkbox value="C" style={{ marginBottom: "25px" }}>
                  C
                </Checkbox>
              </Col>
              <Col>
                <Checkbox value="D" style={{ marginBottom: "25px" }}>
                  D
                </Checkbox>
              </Col>
              <Col>
                <Checkbox value="E" style={{ marginBottom: "25px" }}>
                  E
                </Checkbox>
              </Col>
            </Checkbox.Group>
          </div>
          <div className="date">
            {" "}
            <Space direction="vertical" size={12}>
              Start Date:
              <DatePicker
                defaultValue={moment("2015/01/01", dateFormat)}
                format={dateFormat}
              />
              End Date:
              <DatePicker
                defaultValue={moment("2015/01/01", dateFormat)}
                format={dateFormat}
              />
            </Space>
          </div>
          <div className="price" style={{marginLeft:"20%", marginTop:"5%",}}>
            <h4>Price</h4>
            <div className="range-from">
              <div className="from">From:</div>
              <Input type="number" placeholder="" style={{ width: "50%" }} />
            </div>
            <div className="range-from">
              <div className="from">Up To:</div>
              <Input type="number" placeholder="" style={{ width: "50%" }} />
            </div>
          </div>
          <h4 style={{marginLeft:"20%", marginTop:"5%",}}>Type</h4>
          <div className="type" style={{marginLeft:"20%", marginTop:"5%",}}>
            <Checkbox.Group
              style={{
                width: "50%",
                padding: "10px",
              }}
            >
              <Col>
                <Checkbox value="A" style={{ marginBottom: "25px" }}>
                  A
                </Checkbox>
              </Col>
              <Col>
                <Checkbox value="B" style={{ marginBottom: "25px" }}>
                  B
                </Checkbox>
              </Col>
              <Col>
                <Checkbox value="C" style={{ marginBottom: "25px" }}>
                  C
                </Checkbox>
              </Col>
              <Col>
                <Checkbox value="D" style={{ marginBottom: "25px" }}>
                  D
                </Checkbox>
              </Col>
              <Col>
                <Checkbox value="E" style={{ marginBottom: "25px" }}>
                  E
                </Checkbox>
              </Col>
            </Checkbox.Group>
          </div>
        </div>
        <div className="showcase-screen-right">
          <div className="carScreen">
            <div className="carInformation">
              <img src="https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/amg-gt/roadster/_jcr_content/image.MQ6.2.2x.20200318130703.png" />
              <div className="car-info">
                Car Brand
                <br />
                Car Model
                <br />
                Capacity
                <br />
                Fee
                <br />
                Available Dates
                <br />
                Type
              </div>
            </div>
            <div className="callButton">
              <Button variant="outline-primary">Call</Button>
            </div>
          </div>
          <div className="carScreen">
            <div className="carInformation">
              <img src="https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/amg-gt/roadster/_jcr_content/image.MQ6.2.2x.20200318130703.png" />
              <div className="car-info">
                Car Brand
                <br />
                Car Model
                <br />
                Capacity
                <br />
                Fee
                <br />
                Available Dates
                <br />
                Type
              </div>
            </div>
            <div className="callButton">
              <Button variant="outline-primary">Call</Button>
            </div>
          </div>
          <div className="carScreen">
            <div className="carInformation">
              <img src="https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/amg-gt/roadster/_jcr_content/image.MQ6.2.2x.20200318130703.png" />
              <div className="car-info">
                Car Brand
                <br />
                Car Model
                <br />
                Capacity
                <br />
                Fee
                <br />
                Available Dates
                <br />
                Type
              </div>
            </div>
            <div className="callButton">
              <Button variant="outline-primary">Call</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCarCustomer;
