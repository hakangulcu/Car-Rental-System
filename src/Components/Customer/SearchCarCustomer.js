/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { React, useState, useEffect } from "react";
import "./SearchCarCustomer.css";
import { Switch, Input, Checkbox, Space, Col } from "antd";
import "antd/dist/antd.css";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import Popup from "../popUp/Popup";
import moment from "moment";
import { Select } from "antd";
const { Search } = Input;

const { Option } = Select;

const dateFormat = "YYYY/MM/DD";

function SearchCarCustomer() {
  const [branches, setBranches] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [checkboxes, setCheckboxes] = useState([]);
  const [checkboxesColor, setCheckboxesColor] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date("01-11-2022"));
  const [fromPrice, setFromPrice] = useState("");
  const [upPrice, setUpPrice] = useState("");
  const [branchId, setBranchId] = useState("");
  const [cars, setCars] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/getbranches`
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        if (result.body.branchs) {
          const branchs = result.body.branchs.map((branch) => ({
            branchId: branch[0],
            branchCity: branch[1],
            branchName: branch[2],
            branchAddress: branch[3],
            managerId: branch[4],
            companyId: branch[5],
          }));
          setBranches(branchs);
        }
      });

    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/getbrands`
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);

        if (result.body.brands) {
          const myCheckboxes = result.body.brands.map((brand) => ({
            brandName: brand[0],
            isChecked: false,
          }));
          setCheckboxes(myCheckboxes);
        }
      });

    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/getcolors`
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);

        if (result.body.colors) {
          const myColors = result.body.colors.map((color) => ({
            colorName: color[0],
            isChecked: false,
          }));
          setCheckboxesColor(myColors);
        }
      });

    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/getcars?start_date=2022-01-04&end_date=2022-01-12&branch=2&color=&price_min=1&price_max=1000&brand=`
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        if (result.body.cars) {
          const myCars = result.body.cars.map((car) => ({
            carId: car[0],
            brand: car[1],
            model: car[2],
            currentKm: car[3],
            carStatus: car[4],
            carCondition: car[5],
            color: car[6],
            fuelConsuptionType: car[7],
            fuelConsuptionRate: car[8],
            seatingCapacity: car[9],
            productionYear: car[10],
            description: car[11],
            fee: car[12],
            deposit: car[13],
            transmissionType: car[14],
          }));
          setCars(myCars);
        }
      });
  }, []);

  const handleChangeFrom = (e) => {
    setFromPrice(e.target.value);
  };
  const handleChangeUp = (e) => {
    setUpPrice(e.target.value);
  };

  const handleChecked = (e) => {
    if (checkboxes.length > 0) {
      checkboxes.map((check) => {
        if (check.brandName === e.target.value) {
          const newArray = checkboxes.map((a) => {
            if (a.brandName !== check.brandName) {
              return a;
            } else {
              a.isChecked = !a.isChecked;
              return a;
            }
          });
          setCheckboxes(newArray);
        }
      });
    }
  };

  const handleCheckedColor = (e) => {
    if (checkboxesColor.length > 0) {
      checkboxesColor.map((color) => {
        if (color.colorName === e.target.value) {
          const newArray = checkboxesColor.map((a) => {
            if (a.colorName !== color.colorName) {
              return a;
            } else {
              a.isChecked = !a.isChecked;
              return a;
            }
          });
          setCheckboxesColor(newArray);
        }
      });
    }
  };

  const requestHandle = (e) => {
    let customerId = localStorage.getItem("customerId");
    if (branchId.length === 0) {
      fetch(
        `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/createrequest?car_id=${e}&customer_id=${customerId}&branch_id=2&end_day=2022-01-11&start_day=2022-01-04`
      )
        .then((response) => response.json())
        .then((result) => {
          setIsLoaded(true);
          console.log(result.body);

          if (result.body["message"] === "Request created succesfully") {
            setMessage("Request created succesfully");
            clickHandler();
          } else if (
            result.body["message"] === "Cannot request multiple times."
          ) {
            setMessage("Cannot request multiple times.");
            clickHandler();
          } else if (
            result.body["message"] === "Car is not available on those days."
          ) {
            setMessage("Car is not available on those days");
            clickHandler();
          }
        });
    } else {
      let start = `${startDate.getFullYear()}-${
        startDate.getMonth() + 1
      }-${startDate.getDate()}`;
      let end = `${endDate.getFullYear()}-${
        endDate.getMonth() + 1
      }-${endDate.getDate()}`;

      fetch(
        `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/createrequest?car_id=${e}&customer_id=${customerId}&branch_id=${branchId}&end_day=${end}&start_day=${start}`
      )
        .then((response) => response.json())
        .then((result) => {
          setIsLoaded(true);
          console.log(result.body);
          if (result.body["message"] === "Request created succesfully") {
            setMessage("Request created succesfully");
            clickHandler();
          } else if (
            result.body["message"] === "Cannot request multiple times."
          ) {
            setMessage("Cannot request multiple times");
            clickHandler();
          } else if (
            result.body["message"] === "Car is not available on those days"
          ) {
            setMessage("Car is not available on those days");
            clickHandler();
          }
        });
    }
  };

  function onSearch(event) {
    let brands = "";
    let colors = "";
    checkboxes.map((check) => {
      if (check.isChecked === true) {
        brands = check.brandName + "," + brands;
      }
    });
    checkboxesColor.map((color) => {
      if (color.isChecked === true) {
        colors = color.colorName + "," + colors;
      }
    });
    if (brands.length > 0) {
      brands = brands.substring(0, brands.length - 1);
    }
    if (colors.length > 0) {
      colors = colors.substring(0, colors.length - 1);
    }
    let start = `${startDate.getFullYear()}-${
      startDate.getMonth() + 1
    }-${startDate.getDate()}`;
    let end = `${endDate.getFullYear()}-${
      endDate.getMonth() + 1
    }-${endDate.getDate()}`;

    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/getcars?start_date=${start}&end_date=${end}&branch=${branchId}&color=${colors}&price_min=${fromPrice}&price_max=${upPrice}&brand=${brands}`
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        if (result.body.cars) {
          const myCars = result.body.cars.map((car) => ({
            carId: car[0],
            brand: car[1],
            model: car[2],
            currentKm: car[3],
            carStatus: car[4],
            carCondition: car[5],
            color: car[6],
            fuelConsuptionType: car[7],
            fuelConsuptionRate: car[8],
            seatingCapacity: car[9],
            productionYear: car[10],
            description: car[11],
            fee: car[12],
            deposit: car[13],
            transmissionType: car[14],
          }));
          setCars(myCars);
        }
      });
  }
  function handleChange(e) {
    setBranchId(e);
  }

  const clickHandler = () => {
    setPopUp(true);
  };
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
            <h4>Transporter / Rent </h4>
          </div>
          <div>
            <Switch defaultChecked="transporter" />
          </div>
        </div>
      </div>
      <div className="showcase-screen">
        <div className="showcase-screen-left">
          <div className="branch">
            <div style={{ marginLeft: "20%", marginTop: "5%" }}>
              <h3>Branch</h3>
            </div>

            <div style={{ marginLeft: "15%", marginTop: "5%" }}>
              {branches.length > 0 ? (
                <Select
                  defaultValue={`${branches[0].branchName} - ${branches[0].branchCity}`}
                  style={{ width: 300 }}
                  onChange={handleChange}
                >
                  {branches &&
                    branches.map((branch) => (
                      <>
                        <Option value={branch.branchId}>
                          {`${branch.branchName} - ${branch.branchCity}`}
                        </Option>
                      </>
                    ))}
                </Select>
              ) : (
                <Select
                  defaultValue=""
                  style={{ width: 300 }}
                  onChange={handleChange}
                >
                  <>
                    <Option value="ankara">ankara</Option>
                  </>
                </Select>
              )}
            </div>
          </div>
          <h4 style={{ marginLeft: "20%", marginTop: "5%" }}>Brand</h4>
          <div className="brand">
            <Checkbox.Group
              style={{
                width: "35%",
                padding: "10px",
                marginLeft: "20%",
              }}
            >
              {checkboxes &&
                checkboxes.map((check) => (
                  <Col>
                    <Checkbox
                      onChange={handleChecked}
                      value={check.brandName}
                      style={{ marginBottom: "25px" }}
                    >
                      {check.brandName.toUpperCase()}
                    </Checkbox>
                  </Col>
                ))}
            </Checkbox.Group>
          </div>
          <div className="date">
            {" "}
            <Space direction="vertical" size={12}>
              Start Date:
              <DatePicker
                dateFormat={"dd/MM/yyyy"}
                selected={startDate}
                minDate={new Date("01-04-2022")}
                onChange={(date) => setStartDate(date)}
              />
              End Date:
              <DatePicker
                dateFormat={"dd/MM/yyyy"}
                minDate={new Date("01-11-2022")}
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </Space>
          </div>
          <div className="price" style={{ marginLeft: "20%", marginTop: "5%" }}>
            <h4>Price</h4>
            <div className="range-from">
              <div className="from">From:</div>
              <Input
                type="number"
                style={{ width: "50%" }}
                value={fromPrice}
                onChange={handleChangeFrom}
              />
            </div>
            <div className="range-from">
              <div className="from">Up To:</div>
              <Input
                type="number"
                style={{ width: "50%" }}
                value={upPrice}
                onChange={handleChangeUp}
              />
            </div>
          </div>
          <h4 style={{ marginLeft: "20%", marginTop: "5%" }}>Color</h4>
          <div className="type" style={{ marginLeft: "20%", marginTop: "5%" }}>
            <Checkbox.Group
              style={{
                width: "50%",
                padding: "10px",
              }}
            >
              {checkboxesColor &&
                checkboxesColor.map((color) => (
                  <Col>
                    <Checkbox
                      onChange={handleCheckedColor}
                      value={color.colorName}
                      style={{ marginBottom: "25px" }}
                    >
                      {color.colorName.toUpperCase()}
                    </Checkbox>
                  </Col>
                ))}
            </Checkbox.Group>
          </div>
        </div>
        <div className="showcase-screen-right">
          {cars &&
            cars.map((car) => (
              <div className="carScreen">
                <div className="carInformation">
                  <img src="https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/amg-gt/roadster/_jcr_content/image.MQ6.2.2x.20200318130703.png" />
                  <div className="car-info">
                    Car Brand {car.brand}
                    <br />
                    Car Model {car.model}
                    <br />
                    Color {car.color}
                    <br />
                    Fee {car.fee}
                    <br />
                    Deposit {car.deposit}
                    <br />
                    Seating Capacity {car.seatingCapacity}
                    <br />
                    Current Km {car.currentKm}
                    <br />
                    Fuel Consuption Type {car.fuelConsuptionType}
                    <br />
                    Fuel Consuption Rate {car.fuelConsuptionRate}
                    <br />
                    Description {car.description}
                    <br />
                  </div>
                </div>
                <div className="callButton">
                  <Button
                    variant="outline-primary"
                    onClick={() => requestHandle(car.carId)}
                  >
                    Request Car{" "}
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Popup trigger={popUp} setPopUp={setPopUp} message={message} />
    </div>
  );
}

export default SearchCarCustomer;
