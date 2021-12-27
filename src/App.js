/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
  Redirect,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./Components/LoginOut/Login";
import SignUp from "./Components/LoginOut/SignUp";
import MainPage from "./Components/Customer/MainPage";
import Header from "./Components/Header";
import CustomerProfile from "./Components/Customer/CustomerProfile";
import SearchCarCustomer from "./Components/Customer/SearchCarCustomer";
import CreateEmployeePage from "./Components/CreateEmployee/CreateEmployeePage";
import AddCarPage from "./Components/Car/AddCarPage";
import ManagerMainPage from "./Components/Manager/ManagerMainPage";
import EmployeeProfile from "./Components/Employee/EmployeeProfile";
import Error from "./Components/Error";

/*<Login />  <SignUp /> <MainPage />  <CustomerProfile /> 
      <SearchCarCustomer /> <CreateEmployeePage /> 
      <AddCarPage /> <ManagerMainPage />  <EmployeeProfile />*/

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {localStorage.getItem("logedIn") === "true" ? (
          <Route path="/login" element={<Login />} />
        ) : (
          <Route path="/main" element={<MainPage />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<Error />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/CustomerProfile" element={<CustomerProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
{localStorage.getItem("logedIn") === "true" ? (
  <Redirect to="/intern/jr-revenue/admin/table" />
) : (
  <Redirect to="/intern/jr-revenue/admin/login" />
)}
<Route path="/intern/jr-revenue/admin/login" component={Login} />
<Route path="/intern/jr-revenue/admin/table" component={AdminTable} />
<Route
  path="/intern/jr-revenue/admin/campaign"
  component={Campaign}
/>
*/

/* 
      <Login />
      <Router>
        <div className="app">
          {localStorage.getItem("logedIn") === "true" ? (
            <Navigate to="/page" />
          ) : (
            <Navigate to="/login" />
          )}
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
        </div>
      </Router>
      */
