import React, { useEffect, useState } from "react";
import "./details.css";
const Details = () => {
  const [user, setUser] = useState([]);

  // fetch("https://jsonplaceholder.typicode.com/users")
  const fetachData = () => {
    fetch("http://localhost:4200/user/details")
      .then((res) => res.json())
      .then((data) => setUser(data));
    console.log(user);
  };
  useEffect(() => {
    fetachData();
  }, []);

  return (
    <div className="detalis">
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Action</th>
        </tr>
        {user.map((vl) => (
          <tr>
            <td>{vl._id}</td>
            <td>{vl.name}</td>
            <td>{vl.email}</td>
            <td>{vl.phone}</td>
            <td>
             <div className="action">
             <a href="#">Edit</a>{" "}/{" "}
              <a href="#">Delete</a>
             </div>

            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Details;
