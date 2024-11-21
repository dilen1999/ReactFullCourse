import React from "react";

// function User(props) {
//   return (
//     <div>
//       <h1>Hello mali</h1>
//       <h2>{props.name}</h2>
//       <h2>{props.gender}</h2>
//       <h2>{props.phone}</h2>
//       <h2>{props.name}</h2>
//       <h2>{props.name}</h2>
//     </div>
//   );
// }
function User({ name, gender, age, email, phone }) {
  return (
    <div>
      <h1>Hello mali</h1>
      <h2>{name}</h2>
      <h2>{gender}</h2>
      <h2>{phone}</h2>
      <h2>{age}</h2>
      <h2>{email}</h2>
    </div>
  );
}

export default User;
