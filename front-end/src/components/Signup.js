import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const sendData = (e) => {
    const { name, email, password, phone } = user;
    e.preventDefault();
    fetch("http://localhost:4200/new-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phone,
      }),
    }).then(() => {
      alert("Data inserted Sucessfully !!!");
    });

    setUser({
      name: "",
      email: "",
      password: "",
      phone: "",
    });
  };
  return (
    <div className="form_class">
      <form onSubmit={sendData}>
        <div className="input_container">
          <div className="input_div">
            <label className="lbl" htmlFor="name">
              Name:{" "}
              <input
                value={user.name}
                onChange={onChangeHandler}
                className="input_field"
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </label>
          </div>
          <div className="input_div">
            <label className="lbl" htmlFor="email">
              Email:{" "}
              <input
                value={user.email}
                onChange={onChangeHandler}
                className="input_field"
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </label>
          </div>
          <div className="input_div">
            <label className="lbl" htmlFor="password">
              Pass:{" "}
              <input
                value={user.password}
                onChange={onChangeHandler}
                className="input_field"
                type="password"
                name="password"
                placeholder="Your Password"
              />
            </label>
          </div>
          <div className="input_div">
            <label className="lbl" htmlFor="phone">
              Phone:{" "}
              <input
                value={user.phone}
                onChange={onChangeHandler}
                className="input_field"
                type="text"
                name="phone"
                placeholder="Your Phone"
              />
            </label>
          </div>
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
