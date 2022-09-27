import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="sub_home">
        <h1>⭐What i have to do?⭐</h1>
        <h3>
            Create Below Rest API
          
        </h3>
        <ul>
            <li>User Signup API (POST Method)</li>
            <li>Login API (Get Method)</li>
            <li>User Details (Get Methode)</li>
            <li>Update User Details (Patch Method)</li>
            <li>Delete User Details(Delete Methode)</li>
            <li>Forget Password (Patch Method)</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
