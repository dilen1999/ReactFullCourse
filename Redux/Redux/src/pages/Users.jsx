import React from "react";
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector((state) => state.usersInfo.users);
  console.log(users);
  return (
    <div>
      <h1>Users</h1>
    </div>
  );
}

export default Users;
