import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [buttonState, setButtonState] = useState("Add");
  const [userInfo, setUserInfo] = useState({
    id: uuid(),
    name: "",
    age: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    console.log(e, "eeee");
    const { name, value } = e.target;
    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        [name]: value,
      };
    });
  };

  const addData = () => {
    setUsers((currUsers) => [...currUsers, userInfo]);
    setUserInfo({
      id: uuid(),
      name: "",
      age: "",
      email: "",
      phone: "",
    });
  };

  const deleteData = (id) => {
    setUsers((currUsers) => {
      return currUsers.filter((user) => {
        return user.id !== id;
      });
    });
  };

  const startEditing = (id) => {
    setUserInfo(user);
    setButtonState("Edit");
  };

  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          placeholder="Enter your age"
          name="age"
          value={userInfo.age}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          placeholder="Enter your phone"
          name="phone"
          value={userInfo.phone}
          onChange={handleChange}
        />
        <br />
        {buttonState === "Add" ? (
          <button onClick={addData}>Add</button>
        ) : (
          <div className="buttonContainer">
            <button onClick={addData}>Update</button>
            <button onClick={addData}>Cancel</button>
          </div>
        )}
      </div>

      <div className="dataTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button onClick={() => startEditing(user)}>Edit</button>
                    <button onClick={() => deleteData(user.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
