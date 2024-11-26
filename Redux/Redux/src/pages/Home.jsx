import React from "react";
import { useState } from "react";
import Contact from "./Contact";

function Home() {
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  const handleChange = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    setFormInput((currInput) => {
      return {
        ...currInput,
        [name]: value,
      };
    });
    console.log(name, value);
  };
  return (
    <div>
      <form>
        <label>Name</label>
        <br />
        <input
          name="name"
          type="text"
          value={formInput.name}
          onChange={handleChange}
        />
        <br />
        <label>Age</label>
        <br />
        <input
          name="age"
          type="number"
          value={formInput.age}
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          name="email"
          type="text"
          value={formInput.email}
          onChange={handleChange}
        />
        <br />
        <label>Contact</label>
        <br />
        <input
          name="contact"
          type="number"
          value={formInput.contact}
          onChange={handleChange}
        />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Home;
